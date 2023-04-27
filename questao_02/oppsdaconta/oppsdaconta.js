import { LightningElement, api } from 'lwc';

export default class OppsDaConta extends LightningElement {
    @api ide;
    @api name;
    @api amount;
    @api stagename;
}