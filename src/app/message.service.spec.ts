import { MessageService } from "./message.service";

describe('HeroDetailComponent', () => {
 
    let messageService: MessageService;
    
    beforeEach(() => {

        messageService = new MessageService();
    

    } );

    it('should have Add and Clear method working', () => {

        expect(messageService.messages.length).toBe(0);
        messageService.add("Avinash");
        expect(messageService.messages.length).toBe(1);
        messageService.add("Amar");
        expect(messageService.messages.length).toBe(2);
        messageService.clear();
        expect(messageService.messages.length).toBe(0);

    });

});