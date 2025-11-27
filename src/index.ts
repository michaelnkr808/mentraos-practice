import { AppServer, AppSession, ViewType } from '@mentra/sdk';

const PACKAGE_NAME = process.env.PACKAGE_NAME ?? (() => { throw new Error ('PACKAGE_NAME is not set in .env file');})();
const MENTRAOS_API_KEY = process.env.MENTRAOS_API_KEY ?? (() => { throw new Error('MENTRAOS_API_KEY is not set in .env file');})();
const PORT = parseInt(process.env.PORT || '3000');

class MentraOSApp extends AppServer {

    constructor() {
        super({
            packageName: PACKAGE_NAME,
            apiKey: MENTRAOS_API_KEY,
            port: PORT,
        });
    }

    protected async onSession(session: AppSession, sessionId: string, userId: string): Promise<void> {
        session.layouts.showTextWall("Software has loaded")
    }
}

const app = new MentraOSApp();
app.start().catch(console.error);