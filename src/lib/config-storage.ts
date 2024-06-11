import { GM } from '$';

export default class ConfigStorage {
    private static instance: ConfigStorage;
    
    private constructor() {}

    public static getInstance(): ConfigStorage {
        if (!ConfigStorage.instance) {
            ConfigStorage.instance = new ConfigStorage();
        }
        return ConfigStorage.instance;
    }

    static readonly KEY_BACKEND_URL = 'KEY_BACKEND_URL';

    static readonly DEFAULT: Record<string, string|number|boolean> = {
        KEY_BACKEND_URL: 'http://localhost:5000',
    };

    public async set<T = string|number|boolean>(key: string, value: T) {
        await GM.setValue(key, value);
    }

    public async get<T = string|number|boolean>(key: string): Promise<T> {
        const defaultValue: T = ConfigStorage.DEFAULT[key] as T;
        return GM.getValue<T>(key, defaultValue);
    }
}
