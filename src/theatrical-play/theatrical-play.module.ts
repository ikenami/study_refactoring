import {Module} from "@nestjs/common";
import {StatementService} from "./statement.service";
import {StatementController} from "./statement.controller";

@Module({
    imports: [],
    controllers: [
        StatementController,
    ],
    providers: [
        StatementService,
    ],
})
export default class TheatricalPlayModule {}
