import Date from "./date";

class DataService {
     async create(data) {
         const createdUser = await Date.create(data);
         return createdUser;
     }
     async getAll() {
         const getUser = await Date.find();
         return getUser;
    }

    async getOne(id):Promise<void> {
        if(!id){
           throw new Error('id not')
        }
         const oneData = await Date.findById(id);
         return oneData;
    }

     async update(data) {
        if (!data._id) {
            throw new Error('id not')
        }
        const updatedData = await Date.findByIdAndUpdate(data._id, data, {new: true});
        return updatedData;
    }

    async delete(id):Promise<void> {
        if (!id){
            throw new Error('id not')
        }

        const data = await Date.findByIdAndDelete(id);
        return data;
    }
}

export default new DataService();