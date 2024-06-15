import { TokenData } from "@/lib/tokenizer";
import { CardInformation } from '@/lib/information-collector';
import { CefrLevel } from "./cefr-level";
import ConfigStorage from '@/lib/config-storage';
import AuthTokenManager from "./auth-token-manager";

export async function createClozeCard(
  info: CardInformation,
  tokens: Array<TokenData>
) {
  let englishExample = "";
  for (const token of tokens) {
    if (token.selected && token.isWord) {
      englishExample += `{{c1::${token.value}}}`;
    } else {
      englishExample += token.value;
    }
  }

  const accessToken = await AuthTokenManager.getInstance().getAccessToken();

  const apiEndpoint = await ConfigStorage.getInstance().get<string>(ConfigStorage.KEY_BACKEND_URL);
  const url = new URL("api/v1/clozeNotes", apiEndpoint);
  const response = await fetch(url.toString(), {
    method: "POST",
    headers: new Headers({
      'content-type': 'application/json',
      'x-access-token': accessToken,
    }),
    body: JSON.stringify({
      word: info.word,
      partOfSpeech: info.partOfSpeech,
      guideWord: info.guideWord,
      englishDefinition: info.englishDefinition,
      definitionTranslation: info.definitionTranslation,
      cefrLevel: info.cefrLevel ?? CefrLevel.EMPTY,
      code: info.code ?? '',
      englishExample: englishExample,
      exampleTranslation: info.exampleTranslation,
    }),
  });

  if (!response.ok) {
    throw new Error('An error occurred while sending the request.');
  }

  return await response.json();
}
