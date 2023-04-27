import { LightningElement } from 'lwc';

export default class Propriedadepublica extends LightningElement {
    oppData = [
        {ide: 1, name: 'Opportunity 1', amount: 1000, stagename: 'Prospect'},
        {ide: 2, name: 'Opportunity 2', amount: 2000, stagename: 'Negotiation'},
        {ide: 3, name: 'Opportunity 3', amount: 3000, stagename: 'Closed Won'},
        {ide: 4, name: 'Opportunity 4', amount: 4000, stagename: 'Closed Lost'},
        {ide: 5, name: 'Opportunity 5', amount: 5000, stagename: 'Prospect'},
    ];
}