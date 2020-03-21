import { ICategory } from './category';
import { ITag } from './Tag';

export interface ITodo{
    _id:string,
    title:string,
    isCompleted:boolean,
    targetDate:string,
    tag:ITag[],
    category:ICategory

}