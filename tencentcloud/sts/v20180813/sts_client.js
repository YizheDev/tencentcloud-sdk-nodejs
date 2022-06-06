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
const AssumeRoleWithSAMLResponse = models.AssumeRoleWithSAMLResponse;
const ApiKey = models.ApiKey;
const AssumeRoleWithWebIdentityRequest = models.AssumeRoleWithWebIdentityRequest;
const AssumeRoleWithWebIdentityResponse = models.AssumeRoleWithWebIdentityResponse;
const GetFederationTokenResponse = models.GetFederationTokenResponse;
const QueryApiKeyResponse = models.QueryApiKeyResponse;
const AssumeRoleResponse = models.AssumeRoleResponse;
const QueryApiKeyRequest = models.QueryApiKeyRequest;
const GetFederationTokenRequest = models.GetFederationTokenRequest;
const Tag = models.Tag;
const GetCallerIdentityResponse = models.GetCallerIdentityResponse;
const Credentials = models.Credentials;
const AssumeRoleRequest = models.AssumeRoleRequest;
const GetCallerIdentityRequest = models.GetCallerIdentityRequest;
const AssumeRoleWithSAMLRequest = models.AssumeRoleWithSAMLRequest;


/**
 * sts client
 * @class
 */
class StsClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("sts.tencentcloudapi.com", "2018-08-13", credential, region, profile);
    }
    
    /**
     * 获取联合身份临时访问凭证
     * @param {GetFederationTokenRequest} req
     * @param {function(string, GetFederationTokenResponse):void} cb
     * @public
     */
    GetFederationToken(req, cb) {
        let resp = new GetFederationTokenResponse();
        this.request("GetFederationToken", req, resp, cb);
    }

    /**
     * 拉取API密钥列表
     * @param {QueryApiKeyRequest} req
     * @param {function(string, QueryApiKeyResponse):void} cb
     * @public
     */
    QueryApiKey(req, cb) {
        let resp = new QueryApiKeyResponse();
        this.request("QueryApiKey", req, resp, cb);
    }

    /**
     * 申请扮演角色
     * @param {AssumeRoleRequest} req
     * @param {function(string, AssumeRoleResponse):void} cb
     * @public
     */
    AssumeRole(req, cb) {
        let resp = new AssumeRoleResponse();
        this.request("AssumeRole", req, resp, cb);
    }

    /**
     * 申请OIDC角色临时密钥
     * @param {AssumeRoleWithWebIdentityRequest} req
     * @param {function(string, AssumeRoleWithWebIdentityResponse):void} cb
     * @public
     */
    AssumeRoleWithWebIdentity(req, cb) {
        let resp = new AssumeRoleWithWebIdentityResponse();
        this.request("AssumeRoleWithWebIdentity", req, resp, cb);
    }

    /**
     * 获取当前调用者的身份信息。
接口支持主账号，子账号长期密钥以及AssumeRole，GetFederationToken生成的临时凭据的身份获取。
     * @param {GetCallerIdentityRequest} req
     * @param {function(string, GetCallerIdentityResponse):void} cb
     * @public
     */
    GetCallerIdentity(req, cb) {
        let resp = new GetCallerIdentityResponse();
        this.request("GetCallerIdentity", req, resp, cb);
    }

    /**
     * 本接口（AssumeRoleWithSAML）用于根据 SAML 断言申请角色临时凭证。
     * @param {AssumeRoleWithSAMLRequest} req
     * @param {function(string, AssumeRoleWithSAMLResponse):void} cb
     * @public
     */
    AssumeRoleWithSAML(req, cb) {
        let resp = new AssumeRoleWithSAMLResponse();
        this.request("AssumeRoleWithSAML", req, resp, cb);
    }


}
module.exports = StsClient;
