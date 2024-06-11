import { test, expect, vi } from 'vitest';
import InformationCollector from '@/lib/information-collector';
import Example from '@/lib/example';
import DefinitionBlock from '@/lib/definition-block';
import DsenseBlock from '@/lib/dsense-block';
import EntryBody from '@/lib/entry-body';
import { CefrLevel } from '@/lib/cefr-level';
import PhraseBlock from '@/lib/phrase-block';

test('test getting information from definition block', () => {
    const entryBody = {
        getWord: () => 'test',
        getPartOfSpeech: () => 'part of speech',
        getCode: () => null,
    } as unknown as EntryBody;
    const dsenseBlock = {
        getGuideWord: () => 'guide word',
        getParent: () => entryBody,
    } as unknown as DsenseBlock;
    const definitionBlock = new DefinitionBlock(document.createElement('div'), dsenseBlock);
    vi.spyOn(definitionBlock, 'getEnglishDefinition').mockReturnValue('English definition');
    vi.spyOn(definitionBlock, 'getZhTwDefinition').mockReturnValue('zh-tw definition');
    vi.spyOn(definitionBlock, 'getLevel').mockReturnValue(CefrLevel.A1);
    vi.spyOn(definitionBlock, 'getCode').mockReturnValue('code');
    const example = {
        getEnglishExample: () => 'English example',
        getExampleTranslation: () => 'example translation',
        getParent: () => definitionBlock,
    } as unknown as Example;
    const informationCollector = new InformationCollector(example);
    const cardInformation = informationCollector.getCardInformation();
    expect(cardInformation).toEqual({
        word: 'test',
        partOfSpeech: 'part of speech',
        guideWord: 'guide word',
        englishDefinition: 'English definition',
        definitionTranslation: 'zh-tw definition',
        cefrLevel: CefrLevel.A1,
        code: 'code',
        englishExample: 'English example',
        exampleTranslation: 'example translation',
    });
});

test('test getting information from phrase block', () => {
    const entryBody = {
        getWord: () => 'test',
        getPartOfSpeech: () => 'part of speech',
        getCode: () => null,
    } as unknown as EntryBody;
    const dsenseBlock = {
        getGuideWord: () => 'guide word',
        getParent: () => entryBody,
    } as unknown as DsenseBlock;
    const phraseBlock = new PhraseBlock(document.createElement('div'), dsenseBlock);
    vi.spyOn(phraseBlock, 'getEnglishDefinition').mockReturnValue('English definition');
    vi.spyOn(phraseBlock, 'getZhTwDefinition').mockReturnValue('zh-tw definition');
    vi.spyOn(phraseBlock, 'getPhraseTitle').mockReturnValue('phrase title');
    vi.spyOn(phraseBlock, 'getPhraseInfo').mockReturnValue('phrase info');
    const example = {
        getEnglishExample: () => 'English example',
        getExampleTranslation: () => 'example translation',
        getParent: () => phraseBlock,
    } as unknown as Example;
    const informationCollector = new InformationCollector(example);
    const cardInformation = informationCollector.getCardInformation();
    expect(cardInformation).toEqual({
        word: 'phrase title',
        partOfSpeech: 'phrase',
        guideWord: 'guide word',
        englishDefinition: 'English definition',
        definitionTranslation: 'zh-tw definition',
        cefrLevel: null,
        code: 'phrase info',
        englishExample: 'English example',
        exampleTranslation: 'example translation',
    });
});

test('test getting code from entry block', () => {
    const entryBody = {
        getWord: () => 'test',
        getPartOfSpeech: () => 'part of speech',
        getCode: () => 'entry code',
    } as unknown as EntryBody;
    const dsenseBlock = {
        getGuideWord: () => 'guide word',
        getParent: () => entryBody,
    } as unknown as DsenseBlock;
    const definitionBlock = new DefinitionBlock(document.createElement('div'), dsenseBlock);
    vi.spyOn(definitionBlock, 'getEnglishDefinition').mockReturnValue('English definition');
    vi.spyOn(definitionBlock, 'getZhTwDefinition').mockReturnValue('zh-tw definition');
    vi.spyOn(definitionBlock, 'getLevel').mockReturnValue(CefrLevel.A1);
    vi.spyOn(definitionBlock, 'getCode').mockReturnValue(null);
    const example = {
        getEnglishExample: () => 'English example',
        getExampleTranslation: () => 'example translation',
        getParent: () => definitionBlock,
    } as unknown as Example;
    const informationCollector = new InformationCollector(example);
    const cardInformation = informationCollector.getCardInformation();
    expect(cardInformation).toEqual({
        word: 'test',
        partOfSpeech: 'part of speech',
        guideWord: 'guide word',
        englishDefinition: 'English definition',
        definitionTranslation: 'zh-tw definition',
        cefrLevel: CefrLevel.A1,
        code: 'entry code',
        englishExample: 'English example',
        exampleTranslation: 'example translation',
    });
});
