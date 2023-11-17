import Date from "./date";
import {pass} from "./DB/passwoard";
import DataService from "./dataService";
import dataService from "./dataService";

class PostContreoller {
    async create(req?, res?):Promise<void> {
        try {
            const user = await DataService.create(req.body);
            res.status(200).json(user);
        } catch (e) {
            console.log(e);
            res.status(500).json(e);
        }
    }

    async getAll(req, res):Promise<void> {
        try {
            const data = await Date.find();
            return res.json(data);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getOne(req, res):Promise<void> {
        try {
            const data = await DataService.getOne(req.params.id);
            return res.json(data);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async update(req, res):Promise<void> {
        try {
            const updatedData = await DataService.update(req.body);
            return res.status(201).json(updatedData);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async delete(req, res):Promise<void> {
        try {
            const data = await DataService.delete(req.params);
            return res.status(200).json(data);
        } catch (e) {
            res.status(500).json(e);
        }
    }
}

export default new PostContreoller();