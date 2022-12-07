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
 * trp client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("trp.tencentcloudapi.com", "2021-05-15", clientConfig);
    }
    /**
     * 查询二维码信息
     */
    async DescribeTraceCodeById(req, cb) {
        return this.request("DescribeTraceCodeById", req, cb);
    }
    /**
     * 查自定义码规则列表
     */
    async DescribeCustomRules(req, cb) {
        return this.request("DescribeCustomRules", req, cb);
    }
    /**
     * 修改溯源信息的排序
     */
    async ModifyTraceDataRanks(req, cb) {
        return this.request("ModifyTraceDataRanks", req, cb);
    }
    /**
     * 查自定义码规则
     */
    async DescribeCustomRuleById(req, cb) {
        return this.request("DescribeCustomRuleById", req, cb);
    }
    /**
     * 异步导入激活码包，如果是第三方码包，需要域名跟配置的匹配
     */
    async CreateTraceCodesAsync(req, cb) {
        return this.request("CreateTraceCodesAsync", req, cb);
    }
    /**
     * 查询批次信息
     */
    async DescribeCodeBatchById(req, cb) {
        return this.request("DescribeCodeBatchById", req, cb);
    }
    /**
     * 查询二维码列表
     */
    async DescribeTraceCodes(req, cb) {
        return this.request("DescribeTraceCodes", req, cb);
    }
    /**
     * 查询码包的二维码列表，上限 3 万
     */
    async DescribeCodesByPack(req, cb) {
        return this.request("DescribeCodesByPack", req, cb);
    }
    /**
     * 查询商户信息
     */
    async DescribeMerchantById(req, cb) {
        return this.request("DescribeMerchantById", req, cb);
    }
    /**
     * 新建商品
     */
    async CreateProduct(req, cb) {
        return this.request("CreateProduct", req, cb);
    }
    /**
     * 查询商品列表
     */
    async DescribeProducts(req, cb) {
        return this.request("DescribeProducts", req, cb);
    }
    /**
     * 查询渠道商下属企业额度使用情况
     */
    async DescribeCorpQuotas(req, cb) {
        return this.request("DescribeCorpQuotas", req, cb);
    }
    /**
     * 修改自定义码规则
     */
    async ModifyCustomRule(req, cb) {
        return this.request("ModifyCustomRule", req, cb);
    }
    /**
     * 修改溯源信息
     */
    async ModifyTraceData(req, cb) {
        return this.request("ModifyTraceData", req, cb);
    }
    /**
     * 编辑商品
     */
    async ModifyProduct(req, cb) {
        return this.request("ModifyProduct", req, cb);
    }
    /**
     * 更新自定义码规则状态
     */
    async ModifyCustomRuleStatus(req, cb) {
        return this.request("ModifyCustomRuleStatus", req, cb);
    }
    /**
     * 查询商品信息
     */
    async DescribeProductById(req, cb) {
        return this.request("DescribeProductById", req, cb);
    }
    /**
     * 查询临时Token，主要用于上传接口
     */
    async DescribeTmpToken(req, cb) {
        return this.request("DescribeTmpToken", req, cb);
    }
    /**
     * 批量导入二维码，只支持平台发的码
     */
    async CreateTraceCodes(req, cb) {
        return this.request("CreateTraceCodes", req, cb);
    }
    /**
     * 删除商品，如果商品被使用，则不可删除
     */
    async DeleteProduct(req, cb) {
        return this.request("DeleteProduct", req, cb);
    }
    /**
     * 上链溯源信息
     */
    async CreateTraceChain(req, cb) {
        return this.request("CreateTraceChain", req, cb);
    }
    /**
     * 生成自定义码包
     */
    async CreateCustomPack(req, cb) {
        return this.request("CreateCustomPack", req, cb);
    }
    /**
     * 以订单方式新建企业信息/配额信息
     */
    async CreateCorporationOrder(req, cb) {
        return this.request("CreateCorporationOrder", req, cb);
    }
    /**
     * 删除商户
     */
    async DeleteMerchant(req, cb) {
        return this.request("DeleteMerchant", req, cb);
    }
    /**
     * 查询码包状态
     */
    async DescribeCodePackStatus(req, cb) {
        return this.request("DescribeCodePackStatus", req, cb);
    }
    /**
     * 查询批次列表
     */
    async DescribeCodeBatchs(req, cb) {
        return this.request("DescribeCodeBatchs", req, cb);
    }
    /**
     * 新建自定义码规则
     */
    async CreateCustomRule(req, cb) {
        return this.request("CreateCustomRule", req, cb);
    }
    /**
     * 查询码包地址
     */
    async DescribeCodePackUrl(req, cb) {
        return this.request("DescribeCodePackUrl", req, cb);
    }
    /**
     * 编辑商户
     */
    async ModifyMerchant(req, cb) {
        return this.request("ModifyMerchant", req, cb);
    }
    /**
     * 新增批次
     */
    async CreateCodeBatch(req, cb) {
        return this.request("CreateCodeBatch", req, cb);
    }
    /**
     * 删除批次
     */
    async DeleteCodeBatch(req, cb) {
        return this.request("DeleteCodeBatch", req, cb);
    }
    /**
     * 删除溯源信息，如果已经上链则不可删除
     */
    async DeleteTraceData(req, cb) {
        return this.request("DeleteTraceData", req, cb);
    }
    /**
     * 新增溯源信息
     */
    async CreateTraceData(req, cb) {
        return this.request("CreateTraceData", req, cb);
    }
    /**
     * 新建商户
     */
    async CreateMerchant(req, cb) {
        return this.request("CreateMerchant", req, cb);
    }
    /**
     * 查询溯源信息，通常溯源信息跟生产批次绑定，即一个批次的所有溯源信息都是一样的
     */
    async DescribeTraceDataList(req, cb) {
        return this.request("DescribeTraceDataList", req, cb);
    }
    /**
     * 冻结或者激活二维码，所属的批次的冻结状态优先级大于单个二维码的状态，即如果批次是冻结的，那么该批次下二维码的状态都是冻结的
     */
    async ModifyTraceCode(req, cb) {
        return this.request("ModifyTraceCode", req, cb);
    }
    /**
     * 查询码包列表
     */
    async DescribeCodePacks(req, cb) {
        return this.request("DescribeCodePacks", req, cb);
    }
    /**
     * 修改批次
     */
    async ModifyCodeBatch(req, cb) {
        return this.request("ModifyCodeBatch", req, cb);
    }
    /**
     * 查询商户列表
     */
    async DescribeMerchants(req, cb) {
        return this.request("DescribeMerchants", req, cb);
    }
    /**
     * 生成普通码包
     */
    async CreateCodePack(req, cb) {
        return this.request("CreateCodePack", req, cb);
    }
    /**
     * 获取异步任务的输出地址
     */
    async DescribeJobFileUrl(req, cb) {
        return this.request("DescribeJobFileUrl", req, cb);
    }
}
exports.Client = Client;
