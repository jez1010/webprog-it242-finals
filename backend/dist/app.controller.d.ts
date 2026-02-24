import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getAllPosts(): Promise<any[]>;
    getAllProjects(): Promise<any[]>;
    sendPost(body: {
        name: string;
        content: string;
    }): Promise<null>;
}
