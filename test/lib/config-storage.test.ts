import { expect, test, vi } from "vitest";
import ConfigStorage from "@/lib/config-storage";

vi.mock("vite-plugin-monkey/dist/client", async (importOriginal) => {
    const mod = await importOriginal<typeof import("vite-plugin-monkey/dist/client")>();

    class MockedGm {
        private data: Record<string, any> = {};
    
        async setValue(key: string, value: any) {
            this.data[key] = value;
        }
    
        async getValue<T = string|number|boolean>(key: string, defaultValue: T): Promise<T> {
            return this.data[key] || defaultValue;
        }
    }
    
    return {
        ...mod,
        GM: new MockedGm(),
    };
});

test("test set and get", async () => {    
  const configStorage = ConfigStorage.getInstance();
  await configStorage.set(
    ConfigStorage.KEY_BACKEND_URL,
    "http://localhost:6000"
  );
  const value = await configStorage.get<string>(ConfigStorage.KEY_BACKEND_URL);
  expect(value).toBe("http://localhost:6000");
});
