import { HeroDetailComponent } from "./hero-detail.component";
import { HeroService } from "../hero.service";
import { MessageService } from "../message.service";


describe('HeroDetailComponent', () => {
 
    let hdc: HeroDetailComponent;
    let heroService: HeroService;
    let location: Location;
    let messageService: MessageService;
    let texts: string[] = ["hindustantimes","economictimes"];

    //http: HttpClient,
    

    beforeEach(() => {

        messageService = new MessageService();
        //heroService = new HeroService(messageService);

    });

    it('should be true', () => {

        spyOn(messageService, 'messages').and.returnValue(texts);

        
    });
});