import ResourceNotFoundError from '../errors/ResourceNotFoundError';
import { TagRequestAndResponse, TagUpdateRequest } from '../interfaces/tag';
import { Tag } from '../models/tags';

export const processGetTag = async (tagName: string): Promise<TagRequestAndResponse> => {
    const tag = await Tag.findOne({ where: {name: tagName} });

    if (!tag) {
        throw new ResourceNotFoundError('Tag not found', null)
    }

    return tag
};

export const processUpdateTag = async (body: TagUpdateRequest, tagName: string): Promise<{[key: string]: any}> => {
    const tag = await Tag.findOne({ where: {name: tagName} });

    if (!tag) {
        throw new ResourceNotFoundError('Tag not found', null)
    }

    const updatedTag = await Tag.update(body, {where: {name: tagName}});

    return updatedTag
};
