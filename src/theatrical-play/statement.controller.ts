import {Controller, Get} from "@nestjs/common";
import {StatementService} from "./statement.service";
import {invoices, plays} from "./data";

@Controller('/statement')
export class StatementController {
    constructor(
        private readonly statementService: StatementService,
    ) {}

    @Get()
    public getStatement() {
        return this.statementService.statement(invoices[0], plays);
    }
}
