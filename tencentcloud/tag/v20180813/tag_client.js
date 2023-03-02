/*
 * Copyright (c) 2018 THL A29 Limited, a Tencent company. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
const models = require("./models");
const AbstractClient = require('../../common/abstract_client')
const UnTagResourcesResponse = models.UnTagResourcesResponse;
const TagWithDelete = models.TagWithDelete;
const DetachResourcesTagRequest = models.DetachResourcesTagRequest;
const GetTagValuesResponse = models.GetTagValuesResponse;
const AttachResourcesTagResponse = models.AttachResourcesTagResponse;
const AddProjectResponse = models.AddProjectResponse;
const GetResourcesRequest = models.GetResourcesRequest;
const DeleteTagRequest = models.DeleteTagRequest;
const DeleteResourceTagResponse = models.DeleteResourceTagResponse;
const DescribeResourceTagsByTagKeysRequest = models.DescribeResourceTagsByTagKeysRequest;
const ModifyResourceTagsResponse = models.ModifyResourceTagsResponse;
const DescribeTagsRequest = models.DescribeTagsRequest;
const DescribeProjectsRequest = models.DescribeProjectsRequest;
const DescribeTagValuesRequest = models.DescribeTagValuesRequest;
const UpdateProjectRequest = models.UpdateProjectRequest;
const DescribeResourcesByTagsUnionRequest = models.DescribeResourcesByTagsUnionRequest;
const DeleteTagsResponse = models.DeleteTagsResponse;
const ModifyResourcesTagValueResponse = models.ModifyResourcesTagValueResponse;
const DescribeTagsResponse = models.DescribeTagsResponse;
const DeleteTagsRequest = models.DeleteTagsRequest;
const DescribeTagKeysRequest = models.DescribeTagKeysRequest;
const DescribeProjectsResponse = models.DescribeProjectsResponse;
const UnTagResourcesRequest = models.UnTagResourcesRequest;
const DescribeTagsSeqResponse = models.DescribeTagsSeqResponse;
const ModifyResourceTagsRequest = models.ModifyResourceTagsRequest;
const DescribeResourceTagsResponse = models.DescribeResourceTagsResponse;
const DescribeResourceTagsByResourceIdsRequest = models.DescribeResourceTagsByResourceIdsRequest;
const DescribeResourcesByTagsUnionResponse = models.DescribeResourcesByTagsUnionResponse;
const DescribeResourceTagsByResourceIdsResponse = models.DescribeResourceTagsByResourceIdsResponse;
const GetTagsResponse = models.GetTagsResponse;
const ModifyResourcesTagValueRequest = models.ModifyResourcesTagValueRequest;
const TagResource = models.TagResource;
const AddProjectRequest = models.AddProjectRequest;
const AddResourceTagResponse = models.AddResourceTagResponse;
const DescribeResourcesByTagsResponse = models.DescribeResourcesByTagsResponse;
const AddResourceTagRequest = models.AddResourceTagRequest;
const DescribeTagValuesSeqResponse = models.DescribeTagValuesSeqResponse;
const CreateTagRequest = models.CreateTagRequest;
const DescribeResourceTagsByTagKeysResponse = models.DescribeResourceTagsByTagKeysResponse;
const DescribeTagsSeqRequest = models.DescribeTagsSeqRequest;
const DescribeTagValuesResponse = models.DescribeTagValuesResponse;
const ResourceIdTag = models.ResourceIdTag;
const TagFilter = models.TagFilter;
const Project = models.Project;
const Tag = models.Tag;
const AttachResourcesTagRequest = models.AttachResourcesTagRequest;
const CreateTagResponse = models.CreateTagResponse;
const FailedResource = models.FailedResource;
const ResourceTagMapping = models.ResourceTagMapping;
const GetTagKeysRequest = models.GetTagKeysRequest;
const DetachResourcesTagResponse = models.DetachResourcesTagResponse;
const GetResourcesResponse = models.GetResourcesResponse;
const DescribeResourceTagsByResourceIdsSeqResponse = models.DescribeResourceTagsByResourceIdsSeqResponse;
const DeleteTagResponse = models.DeleteTagResponse;
const DescribeTagKeysResponse = models.DescribeTagKeysResponse;
const DescribeTagValuesSeqRequest = models.DescribeTagValuesSeqRequest;
const UpdateResourceTagValueRequest = models.UpdateResourceTagValueRequest;
const GetTagKeysResponse = models.GetTagKeysResponse;
const TagResourcesResponse = models.TagResourcesResponse;
const CreateTagsRequest = models.CreateTagsRequest;
const CreateTagsResponse = models.CreateTagsResponse;
const GetTagsRequest = models.GetTagsRequest;
const DescribeResourcesByTagsRequest = models.DescribeResourcesByTagsRequest;
const TagResourcesRequest = models.TagResourcesRequest;
const DeleteResourceTagRequest = models.DeleteResourceTagRequest;
const UpdateResourceTagValueResponse = models.UpdateResourceTagValueResponse;
const TagKeyObject = models.TagKeyObject;
const DescribeResourceTagsRequest = models.DescribeResourceTagsRequest;
const UpdateProjectResponse = models.UpdateProjectResponse;
const DescribeResourceTagsByResourceIdsSeqRequest = models.DescribeResourceTagsByResourceIdsSeqRequest;
const GetTagValuesRequest = models.GetTagValuesRequest;
const ResourceTag = models.ResourceTag;


/**
 * tag client
 * @class
 */
class TagClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("tag.tencentcloudapi.com", "2018-08-13", credential, region, profile);
    }
    
    /**
     * 本接口用于批量删除标签键和标签值。
     * @param {DeleteTagsRequest} req
     * @param {function(string, DeleteTagsResponse):void} cb
     * @public
     */
    DeleteTags(req, cb) {
        let resp = new DeleteTagsResponse();
        this.request("DeleteTags", req, resp, cb);
    }

    /**
     * 根据标签键获取资源标签
     * @param {DescribeResourceTagsByTagKeysRequest} req
     * @param {function(string, DescribeResourceTagsByTagKeysResponse):void} cb
     * @public
     */
    DescribeResourceTagsByTagKeys(req, cb) {
        let resp = new DescribeResourceTagsByTagKeysResponse();
        this.request("DescribeResourceTagsByTagKeys", req, resp, cb);
    }

    /**
     * 用于查询已建立的标签列表中的标签值。
     * @param {GetTagValuesRequest} req
     * @param {function(string, GetTagValuesResponse):void} cb
     * @public
     */
    GetTagValues(req, cb) {
        let resp = new GetTagValuesResponse();
        this.request("GetTagValues", req, resp, cb);
    }

    /**
     * 用于批量查询已有资源关联的标签键值对
     * @param {DescribeResourceTagsByResourceIdsRequest} req
     * @param {function(string, DescribeResourceTagsByResourceIdsResponse):void} cb
     * @public
     */
    DescribeResourceTagsByResourceIds(req, cb) {
        let resp = new DescribeResourceTagsByResourceIdsResponse();
        this.request("DescribeResourceTagsByResourceIds", req, resp, cb);
    }

    /**
     * 本接口用于修改资源已关联的标签值（标签键不变）
     * @param {UpdateResourceTagValueRequest} req
     * @param {function(string, UpdateResourceTagValueResponse):void} cb
     * @public
     */
    UpdateResourceTagValue(req, cb) {
        let resp = new UpdateResourceTagValueResponse();
        this.request("UpdateResourceTagValue", req, resp, cb);
    }

    /**
     * 按顺序查看资源关联的标签
     * @param {DescribeResourceTagsByResourceIdsSeqRequest} req
     * @param {function(string, DescribeResourceTagsByResourceIdsSeqResponse):void} cb
     * @public
     */
    DescribeResourceTagsByResourceIdsSeq(req, cb) {
        let resp = new DescribeResourceTagsByResourceIdsSeqResponse();
        this.request("DescribeResourceTagsByResourceIdsSeq", req, resp, cb);
    }

    /**
     * 用于获取已建立的标签列表。
     * @param {GetTagsRequest} req
     * @param {function(string, GetTagsResponse):void} cb
     * @public
     */
    GetTags(req, cb) {
        let resp = new GetTagsResponse();
        this.request("GetTags", req, resp, cb);
    }

    /**
     * 修改多个资源关联的某个标签键对应的标签值
     * @param {ModifyResourcesTagValueRequest} req
     * @param {function(string, ModifyResourcesTagValueResponse):void} cb
     * @public
     */
    ModifyResourcesTagValue(req, cb) {
        let resp = new ModifyResourcesTagValueResponse();
        this.request("ModifyResourcesTagValue", req, resp, cb);
    }

    /**
     * 通过标签查询资源列表
     * @param {DescribeResourcesByTagsRequest} req
     * @param {function(string, DescribeResourcesByTagsResponse):void} cb
     * @public
     */
    DescribeResourcesByTags(req, cb) {
        let resp = new DescribeResourcesByTagsResponse();
        this.request("DescribeResourcesByTags", req, resp, cb);
    }

    /**
     * 本接口用于删除一对标签键和标签值
     * @param {DeleteTagRequest} req
     * @param {function(string, DeleteTagResponse):void} cb
     * @public
     */
    DeleteTag(req, cb) {
        let resp = new DeleteTagResponse();
        this.request("DeleteTag", req, resp, cb);
    }

    /**
     * 查询绑定了标签的资源列表。
     * @param {GetResourcesRequest} req
     * @param {function(string, GetResourcesResponse):void} cb
     * @public
     */
    GetResources(req, cb) {
        let resp = new GetResourcesResponse();
        this.request("GetResources", req, resp, cb);
    }

    /**
     * 查询资源关联标签
     * @param {DescribeResourceTagsRequest} req
     * @param {function(string, DescribeResourceTagsResponse):void} cb
     * @public
     */
    DescribeResourceTags(req, cb) {
        let resp = new DescribeResourceTagsResponse();
        this.request("DescribeResourceTags", req, resp, cb);
    }

    /**
     * 创建项目
     * @param {AddProjectRequest} req
     * @param {function(string, AddProjectResponse):void} cb
     * @public
     */
    AddProject(req, cb) {
        let resp = new AddProjectResponse();
        this.request("AddProject", req, resp, cb);
    }

    /**
     * 用于查询已建立的标签列表。

     * @param {DescribeTagsSeqRequest} req
     * @param {function(string, DescribeTagsSeqResponse):void} cb
     * @public
     */
    DescribeTagsSeq(req, cb) {
        let resp = new DescribeTagsSeqResponse();
        this.request("DescribeTagsSeq", req, resp, cb);
    }

    /**
     * 本接口用于给标签关联资源
     * @param {AddResourceTagRequest} req
     * @param {function(string, AddResourceTagResponse):void} cb
     * @public
     */
    AddResourceTag(req, cb) {
        let resp = new AddResourceTagResponse();
        this.request("AddResourceTag", req, resp, cb);
    }

    /**
     * 给多个资源关联某个标签
     * @param {AttachResourcesTagRequest} req
     * @param {function(string, AttachResourcesTagResponse):void} cb
     * @public
     */
    AttachResourcesTag(req, cb) {
        let resp = new AttachResourcesTagResponse();
        this.request("AttachResourcesTag", req, resp, cb);
    }

    /**
     * 本接口用于创建一对标签键和标签值
     * @param {CreateTagRequest} req
     * @param {function(string, CreateTagResponse):void} cb
     * @public
     */
    CreateTag(req, cb) {
        let resp = new CreateTagResponse();
        this.request("CreateTag", req, resp, cb);
    }

    /**
     * 解绑多个资源关联的某个标签
     * @param {DetachResourcesTagRequest} req
     * @param {function(string, DetachResourcesTagResponse):void} cb
     * @public
     */
    DetachResourcesTag(req, cb) {
        let resp = new DetachResourcesTagResponse();
        this.request("DetachResourcesTag", req, resp, cb);
    }

    /**
     * 用于查询已建立的标签列表中的标签值。
     * @param {DescribeTagValuesRequest} req
     * @param {function(string, DescribeTagValuesResponse):void} cb
     * @public
     */
    DescribeTagValues(req, cb) {
        let resp = new DescribeTagValuesResponse();
        this.request("DescribeTagValues", req, resp, cb);
    }

    /**
     * 为指定的多个云产品的多个云资源统一创建并绑定标签。
     * @param {TagResourcesRequest} req
     * @param {function(string, TagResourcesResponse):void} cb
     * @public
     */
    TagResources(req, cb) {
        let resp = new TagResourcesResponse();
        this.request("TagResources", req, resp, cb);
    }

    /**
     * 本接口用于解除标签和资源的关联关系
     * @param {DeleteResourceTagRequest} req
     * @param {function(string, DeleteResourceTagResponse):void} cb
     * @public
     */
    DeleteResourceTag(req, cb) {
        let resp = new DeleteResourceTagResponse();
        this.request("DeleteResourceTag", req, resp, cb);
    }

    /**
     * 用于查询已建立的标签列表。

     * @param {DescribeTagsRequest} req
     * @param {function(string, DescribeTagsResponse):void} cb
     * @public
     */
    DescribeTags(req, cb) {
        let resp = new DescribeTagsResponse();
        this.request("DescribeTags", req, resp, cb);
    }

    /**
     * 获取项目列表
     * @param {DescribeProjectsRequest} req
     * @param {function(string, DescribeProjectsResponse):void} cb
     * @public
     */
    DescribeProjects(req, cb) {
        let resp = new DescribeProjectsResponse();
        this.request("DescribeProjects", req, resp, cb);
    }

    /**
     * 用于查询已建立的标签列表中的标签键。

     * @param {DescribeTagKeysRequest} req
     * @param {function(string, DescribeTagKeysResponse):void} cb
     * @public
     */
    DescribeTagKeys(req, cb) {
        let resp = new DescribeTagKeysResponse();
        this.request("DescribeTagKeys", req, resp, cb);
    }

    /**
     * 指定的多个云产品的多个云资源统一解绑标签。
     * @param {UnTagResourcesRequest} req
     * @param {function(string, UnTagResourcesResponse):void} cb
     * @public
     */
    UnTagResources(req, cb) {
        let resp = new UnTagResourcesResponse();
        this.request("UnTagResources", req, resp, cb);
    }

    /**
     * 用于查询已建立的标签列表中的标签值。
     * @param {DescribeTagValuesSeqRequest} req
     * @param {function(string, DescribeTagValuesSeqResponse):void} cb
     * @public
     */
    DescribeTagValuesSeq(req, cb) {
        let resp = new DescribeTagValuesSeqResponse();
        this.request("DescribeTagValuesSeq", req, resp, cb);
    }

    /**
     * 本接口用于创建多对标签键和标签值
     * @param {CreateTagsRequest} req
     * @param {function(string, CreateTagsResponse):void} cb
     * @public
     */
    CreateTags(req, cb) {
        let resp = new CreateTagsResponse();
        this.request("CreateTags", req, resp, cb);
    }

    /**
     * 通过标签查询资源列表并集
     * @param {DescribeResourcesByTagsUnionRequest} req
     * @param {function(string, DescribeResourcesByTagsUnionResponse):void} cb
     * @public
     */
    DescribeResourcesByTagsUnion(req, cb) {
        let resp = new DescribeResourcesByTagsUnionResponse();
        this.request("DescribeResourcesByTagsUnion", req, resp, cb);
    }

    /**
     * 修改项目
     * @param {UpdateProjectRequest} req
     * @param {function(string, UpdateProjectResponse):void} cb
     * @public
     */
    UpdateProject(req, cb) {
        let resp = new UpdateProjectResponse();
        this.request("UpdateProject", req, resp, cb);
    }

    /**
     * 本接口用于修改资源关联的所有标签
     * @param {ModifyResourceTagsRequest} req
     * @param {function(string, ModifyResourceTagsResponse):void} cb
     * @public
     */
    ModifyResourceTags(req, cb) {
        let resp = new ModifyResourceTagsResponse();
        this.request("ModifyResourceTags", req, resp, cb);
    }

    /**
     * 查询标签键列表。
     * @param {GetTagKeysRequest} req
     * @param {function(string, GetTagKeysResponse):void} cb
     * @public
     */
    GetTagKeys(req, cb) {
        let resp = new GetTagKeysResponse();
        this.request("GetTagKeys", req, resp, cb);
    }


}
module.exports = TagClient;
