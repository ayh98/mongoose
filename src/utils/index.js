const { Movie } = require ('../movie/movie.model')

exports.add = async (entryObj) => {
    try {
        const movie = new Movie(entryObj);
        const savedMovie = await movie.save();
        console.log(`${savedMovie} Added Successfully`);
    } 
    catch (error) {
        console.log(error);    
    }
};

exports.list = async () => {
    try {
        const list = await Movie.find();
        console.log(list);
    } 
    catch (error) {
        console.log(error);
    }
}

exports.update = async (find, update) => {
    try {
        const updatedMovie = await Movie.findOneAndUpdate(find, update, { new: true });
        console.log(`${updatedMovie} Updated Successfully`);
    }
    catch (error) {
        console.log(error);
    }
}

exports.remove = async (find, remove)=> {
    try {
        const deletedMovie = await Movie.findOneAndDelete(find, remove);
        console.log(`${deletedMovie} Deleted Successfully`);
    } 
    catch (error) {
        console.log(error);
    }
}