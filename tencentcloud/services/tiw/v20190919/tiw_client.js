"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
/* eslint-disable @typescript-eslint/no-unused-vars */
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
const abstract_client_1 = require("../../../common/abstract_client");
/**
 * tiw client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("tiw.tencentcloudapi.com", "2019-09-19", clientConfig);
    }
    /**
     * 设置实时录制回调地址，回调数据格式请参考文档：https://cloud.tencent.com/document/product/1137/40258
     */
    async SetOnlineRecordCallback(req, cb) {
        return this.request("SetOnlineRecordCallback", req, cb);
    }
    /**
     * 设置文档转码回调鉴权密钥，回调鉴权方式请参考文档：https://cloud.tencent.com/document/product/1137/40257
     */
    async SetTranscodeCallbackKey(req, cb) {
        return this.request("SetTranscodeCallbackKey", req, cb);
    }
    /**
     * 发起一个实时录制任务
     */
    async StartOnlineRecord(req, cb) {
        return this.request("StartOnlineRecord", req, cb);
    }
    /**
     * 查询文档转码任务的执行进度与转码结果
     */
    async DescribeTranscode(req, cb) {
        return this.request("DescribeTranscode", req, cb);
    }
    /**
     * 创建一个文档转码任务
     */
    async CreateTranscode(req, cb) {
        return this.request("CreateTranscode", req, cb);
    }
    /**
     * 查询录制视频生成回调地址
     */
    async DescribeVideoGenerationTaskCallback(req, cb) {
        return this.request("DescribeVideoGenerationTaskCallback", req, cb);
    }
    /**
     * 停止实时录制
     */
    async StopOnlineRecord(req, cb) {
        return this.request("StopOnlineRecord", req, cb);
    }
    /**
     * 设置文档转码回调地址，回调数据格式请参考文档：https://cloud.tencent.com/document/product/1137/40260
     */
    async SetTranscodeCallback(req, cb) {
        return this.request("SetTranscodeCallback", req, cb);
    }
    /**
     * 设置录制视频生成回调地址
     */
    async SetVideoGenerationTaskCallback(req, cb) {
        return this.request("SetVideoGenerationTaskCallback", req, cb);
    }
    /**
     * 创建视频生成任务
     */
    async CreateVideoGenerationTask(req, cb) {
        return this.request("CreateVideoGenerationTask", req, cb);
    }
    /**
     * 设置实时录制回调鉴权密钥，回调鉴权方式请参考文档：https://cloud.tencent.com/document/product/1137/40257
     */
    async SetOnlineRecordCallbackKey(req, cb) {
        return this.request("SetOnlineRecordCallbackKey", req, cb);
    }
    /**
     * 暂停实时录制
     */
    async PauseOnlineRecord(req, cb) {
        return this.request("PauseOnlineRecord", req, cb);
    }
    /**
     * 查询文档转码回调地址
     */
    async DescribeTranscodeCallback(req, cb) {
        return this.request("DescribeTranscodeCallback", req, cb);
    }
    /**
     * 查询录制任务状态与结果
     */
    async DescribeOnlineRecord(req, cb) {
        return this.request("DescribeOnlineRecord", req, cb);
    }
    /**
     * 设置视频生成回调鉴权密钥
     */
    async SetVideoGenerationTaskCallbackKey(req, cb) {
        return this.request("SetVideoGenerationTaskCallbackKey", req, cb);
    }
    /**
     * 查询实时录制回调地址
     */
    async DescribeOnlineRecordCallback(req, cb) {
        return this.request("DescribeOnlineRecordCallback", req, cb);
    }
    /**
     * 恢复实时录制
     */
    async ResumeOnlineRecord(req, cb) {
        return this.request("ResumeOnlineRecord", req, cb);
    }
    /**
     * 查询录制视频生成任务状态与结果
     */
    async DescribeVideoGenerationTask(req, cb) {
        return this.request("DescribeVideoGenerationTask", req, cb);
    }
}
exports.Client = Client;
