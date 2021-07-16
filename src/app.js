require("./db/connection");
const { add, list, update, remove } = require('./utils');
const yargs = require("yargs");
const command = process.argv[2];
const titleInput = yargs.argv.title;
const updateTitle = yargs.argv.updateTitle
const actorInput = yargs.argv.actor;
const watchedInput = yargs.argv.watched;

const app = () => {
    if (command === "add") {
        if(actorInput) {
            add({ title: titleInput, actor: actorInput });
        }
        else {
            add({ title: titleInput });
        }
    }
    else if (command === "list") {
        list ();
    }
    else if (command === "update") {
        if(watchedInput){
            update( {title: titleInput}, {watched: true} );
        }
        else if(actorInput){
            update( {title: titleInput}, {actor: actorInput} );
        }
        else if(updateTitle){
            update( {title: titleInput}, {title: updateTitle} );
        }
    
    }
    else if (command === "remove") {
        if(actorInput){
            remove( {title: titleInput, actor: actorInput} );
        }
        else {
            remove({ title: titleInput });
        }
    }
}

app();