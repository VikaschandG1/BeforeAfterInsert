import { EntitySubscriberInterface, EventSubscriber, InsertEvent } from "typeorm";
import { User } from "../entity/User";

@EventSubscriber()
export class PostSubscriber implements EntitySubscriberInterface<User> {
    /**
     * Indicates that this subscriber only listen to Post events.
     */
    listenTo() {
        return User
    }

    /**
     * Called before post insertion.
     */
    beforeInsert(event: InsertEvent<User>) {
        console.log('Before post inserted',)
        // event.entity.firstName="vikram",
        // event.entity.lastName="vider",
        // event.entity.age=24;
      
     
      
    }
    afterInsert(event: InsertEvent<User>) {
        console.log('AFTER ENTITY INSERTED')
        
        // event.entity.firstName="chandu",
        // event.entity.lastName="g",
        // event.entity.age=25;
    }
}