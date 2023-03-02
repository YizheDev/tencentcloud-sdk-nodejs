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
const LexicalAnalysisResponse = models.LexicalAnalysisResponse;
const SentenceEmbeddingRequest = models.SentenceEmbeddingRequest;
const TextClassificationRequest = models.TextClassificationRequest;
const WordSimilarityRequest = models.WordSimilarityRequest;
const SearchWordItemsResponse = models.SearchWordItemsResponse;
const DpToken = models.DpToken;
const TextSimilarityResponse = models.TextSimilarityResponse;
const WordEmbeddingRequest = models.WordEmbeddingRequest;
const ChatBotResponse = models.ChatBotResponse;
const AutoSummarizationRequest = models.AutoSummarizationRequest;
const ChatBotRequest = models.ChatBotRequest;
const TextClassificationResponse = models.TextClassificationResponse;
const KeywordsExtractionRequest = models.KeywordsExtractionRequest;
const DictInfo = models.DictInfo;
const TextCorrectionRequest = models.TextCorrectionRequest;
const ClassificationResult = models.ClassificationResult;
const TextCorrectionProResponse = models.TextCorrectionProResponse;
const Keyword = models.Keyword;
const TextSimilarityProRequest = models.TextSimilarityProRequest;
const UpdateDictResponse = models.UpdateDictResponse;
const DescribeDictsRequest = models.DescribeDictsRequest;
const WordSimilarityResponse = models.WordSimilarityResponse;
const SearchResult = models.SearchResult;
const CreateWordItemsRequest = models.CreateWordItemsRequest;
const WordItem = models.WordItem;
const DeleteWordItemsResponse = models.DeleteWordItemsResponse;
const SentenceEmbeddingResponse = models.SentenceEmbeddingResponse;
const UpdateDictRequest = models.UpdateDictRequest;
const DeleteDictResponse = models.DeleteDictResponse;
const DescribeWordItemsRequest = models.DescribeWordItemsRequest;
const GenerateCoupletResponse = models.GenerateCoupletResponse;
const CreateDictResponse = models.CreateDictResponse;
const TextSimilarityRequest = models.TextSimilarityRequest;
const AutoSummarizationResponse = models.AutoSummarizationResponse;
const WordEmbeddingResponse = models.WordEmbeddingResponse;
const DescribeWordItemsResponse = models.DescribeWordItemsResponse;
const SimilarWordsRequest = models.SimilarWordsRequest;
const DescribeDictRequest = models.DescribeDictRequest;
const PosToken = models.PosToken;
const GeneratePoetryResponse = models.GeneratePoetryResponse;
const DeleteWordItemsRequest = models.DeleteWordItemsRequest;
const DescribeDictResponse = models.DescribeDictResponse;
const TextCorrectionProRequest = models.TextCorrectionProRequest;
const TextCorrectionResponse = models.TextCorrectionResponse;
const TextSimilarityProResponse = models.TextSimilarityProResponse;
const DescribeDictsResponse = models.DescribeDictsResponse;
const DependencyParsingRequest = models.DependencyParsingRequest;
const DeleteDictRequest = models.DeleteDictRequest;
const Similarity = models.Similarity;
const NerToken = models.NerToken;
const SentimentAnalysisResponse = models.SentimentAnalysisResponse;
const DependencyParsingResponse = models.DependencyParsingResponse;
const SimilarWordsResponse = models.SimilarWordsResponse;
const GenerateCoupletRequest = models.GenerateCoupletRequest;
const CCIToken = models.CCIToken;
const LexicalAnalysisRequest = models.LexicalAnalysisRequest;
const GeneratePoetryRequest = models.GeneratePoetryRequest;
const CreateWordItemsResponse = models.CreateWordItemsResponse;
const SentimentAnalysisRequest = models.SentimentAnalysisRequest;
const SearchWordItemsRequest = models.SearchWordItemsRequest;
const KeywordsExtractionResponse = models.KeywordsExtractionResponse;
const CreateDictRequest = models.CreateDictRequest;


/**
 * nlp client
 * @class
 */
class NlpClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("nlp.tencentcloudapi.com", "2019-04-08", credential, region, profile);
    }
    
    /**
     * 根据id或名称查询自定义词库信息。
     * @param {DescribeDictRequest} req
     * @param {function(string, DescribeDictResponse):void} cb
     * @public
     */
    DescribeDict(req, cb) {
        let resp = new DescribeDictResponse();
        this.request("DescribeDict", req, resp, cb);
    }

    /**
     * 查询指定自定义词库中的词条是否存在。
     * @param {SearchWordItemsRequest} req
     * @param {function(string, SearchWordItemsResponse):void} cb
     * @public
     */
    SearchWordItems(req, cb) {
        let resp = new SearchWordItemsResponse();
        this.request("SearchWordItems", req, resp, cb);
    }

    /**
     * 用于删除自定义词库中的词条。
     * @param {DeleteWordItemsRequest} req
     * @param {function(string, DeleteWordItemsResponse):void} cb
     * @public
     */
    DeleteWordItems(req, cb) {
        let resp = new DeleteWordItemsResponse();
        this.request("DeleteWordItems", req, resp, cb);
    }

    /**
     * 修改自定义词库元数据信息，包括名称、描述。
     * @param {UpdateDictRequest} req
     * @param {function(string, UpdateDictResponse):void} cb
     * @public
     */
    UpdateDict(req, cb) {
        let resp = new UpdateDictResponse();
        this.request("UpdateDict", req, resp, cb);
    }

    /**
     * 句法依存分析接口能够分析出句子中词与词之间的相互依存关系，并揭示其句法结构，包括主谓关系、动宾关系、核心关系等等，可用于提取句子主干、提取句子核心词等，在机器翻译、自动问答、知识抽取等领域都有很好的应用。
     * @param {DependencyParsingRequest} req
     * @param {function(string, DependencyParsingResponse):void} cb
     * @public
     */
    DependencyParsing(req, cb) {
        let resp = new DependencyParsingResponse();
        this.request("DependencyParsing", req, resp, cb);
    }

    /**
     * 词向量接口能够将输入的词语映射成一个固定维度的词向量，用来表示这个词语的语义特征。词向量是很多自然语言处理技术的基础，能够显著提高它们的效果。

该词向量服务由腾讯知文自然语言处理团队联合腾讯AI Lab共同打造。使用的词向量基于千亿级大规模互联网语料并采用AI Lab自研的DSG算法训练而成，开源的词向量包含800多万中文词汇，在覆盖率、新鲜度及准确性等三方面性能突出。

     * @param {WordEmbeddingRequest} req
     * @param {function(string, WordEmbeddingResponse):void} cb
     * @public
     */
    WordEmbedding(req, cb) {
        let resp = new WordEmbeddingResponse();
        this.request("WordEmbedding", req, resp, cb);
    }

    /**
     * 返回属于当前用户的所有自定义词库列表。
     * @param {DescribeDictsRequest} req
     * @param {function(string, DescribeDictsResponse):void} cb
     * @public
     */
    DescribeDicts(req, cb) {
        let resp = new DescribeDictsResponse();
        this.request("DescribeDicts", req, resp, cb);
    }

    /**
     * 根据指定的名称、描述创建自定义词库。
     * @param {CreateDictRequest} req
     * @param {function(string, CreateDictResponse):void} cb
     * @public
     */
    CreateDict(req, cb) {
        let resp = new CreateDictResponse();
        this.request("CreateDict", req, resp, cb);
    }

    /**
     * 根据用户输入的命题关键词自动生成一首七言律诗或五言律诗。（如需开通请联系商务）
     * @param {GeneratePoetryRequest} req
     * @param {function(string, GeneratePoetryResponse):void} cb
     * @public
     */
    GeneratePoetry(req, cb) {
        let resp = new GeneratePoetryResponse();
        this.request("GeneratePoetry", req, resp, cb);
    }

    /**
     * 文本分类接口能够对用户输入的文本进行自动分类，将其映射到具体的类目上，用户只需要提供待分类的文本，而无需关注具体实现。

该功能基于千亿级大规模互联网语料和LSTM、BERT等深度神经网络模型进行训练，并持续迭代更新，以保证效果不断提升。

目前已提供：

- 通用领域分类体系，二级分类，包括14个分类类目，分别是汽车、科技、健康、体育、旅行、教育、职业、文化、房产、娱乐、女性、奥运、财经以及其他，适用于通用的场景。
     * @param {TextClassificationRequest} req
     * @param {function(string, TextClassificationResponse):void} cb
     * @public
     */
    TextClassification(req, cb) {
        let resp = new TextClassificationResponse();
        this.request("TextClassification", req, resp, cb);
    }

    /**
     * 词相似度接口能够基于词向量技术来计算两个输入词语的余弦相似度，相似度数值越大的两个词语在语义上越相似。
     * @param {WordSimilarityRequest} req
     * @param {function(string, WordSimilarityResponse):void} cb
     * @public
     */
    WordSimilarity(req, cb) {
        let resp = new WordSimilarityResponse();
        this.request("WordSimilarity", req, resp, cb);
    }

    /**
     * 句向量接口能够将输入的句子映射成一个固定维度的向量，用来表示这个句子的语义特征，可用于文本聚类、文本相似度、文本分类等任务，能够显著提高它们的效果。

该句向量服务由腾讯云自然语言处理团队联合微信智言团队共同打造，基于千亿级大规模互联网语料并采用Bert等领先的深度神经网络模型训练而成，在腾讯内部诸多业务的NLP任务上实测效果显著。
     * @param {SentenceEmbeddingRequest} req
     * @param {function(string, SentenceEmbeddingResponse):void} cb
     * @public
     */
    SentenceEmbedding(req, cb) {
        let resp = new SentenceEmbeddingResponse();
        this.request("SentenceEmbedding", req, resp, cb);
    }

    /**
     * 依据自定义词库的ID，查询对应的词条信息。
     * @param {DescribeWordItemsRequest} req
     * @param {function(string, DescribeWordItemsResponse):void} cb
     * @public
     */
    DescribeWordItems(req, cb) {
        let resp = new DescribeWordItemsResponse();
        this.request("DescribeWordItems", req, resp, cb);
    }

    /**
     * 提供对中文文本的自动纠错功能，能够识别输入文本中的错误片段，定位错误并给出正确的文本结果；支持长度不超过2000字符（含标点符号）的长文本纠错。

此功能是基于千亿级大规模互联网语料和LSTM、BERT等深度神经网络模型进行训练，并持续迭代更新，以保证效果不断提升，是搜索引擎、语音识别、内容审核等功能更好运行的基础之一。 
     * @param {TextCorrectionRequest} req
     * @param {function(string, TextCorrectionResponse):void} cb
     * @public
     */
    TextCorrection(req, cb) {
        let resp = new TextCorrectionResponse();
        this.request("TextCorrection", req, resp, cb);
    }

    /**
     * 根据用户输入的命题关键词自动生成一副春联，包括上联、下联和横批。（如需开通请联系商务）
     * @param {GenerateCoupletRequest} req
     * @param {function(string, GenerateCoupletResponse):void} cb
     * @public
     */
    GenerateCouplet(req, cb) {
        let resp = new GenerateCoupletResponse();
        this.request("GenerateCouplet", req, resp, cb);
    }

    /**
     * 向指定的词库中添加词条。
     * @param {CreateWordItemsRequest} req
     * @param {function(string, CreateWordItemsResponse):void} cb
     * @public
     */
    CreateWordItems(req, cb) {
        let resp = new CreateWordItemsResponse();
        this.request("CreateWordItems", req, resp, cb);
    }

    /**
     * 句子相似度接口能够基于深度学习技术来计算一个源句子和多个目标句子的相似度，相似度分值越大的两个句子在语义上越相似。目前仅支持短文本（不超过128字符）的相似度计算，长文本的相似度计算也即将推出。

鉴于句子相似度是一个应用非常广泛的功能，腾讯云自然语言处理团队在Bert等领先的深度神经网络模型的基础上，专门针对文本相似任务进行了优化，并持续迭代更新。基于句子相似度，可以轻松实现诸如文本去重、相似推荐等功能。

接口将以句子数量为单位消耗资源包，而不是调用接口次数为单位。
     * @param {TextSimilarityProRequest} req
     * @param {function(string, TextSimilarityProResponse):void} cb
     * @public
     */
    TextSimilarityPro(req, cb) {
        let resp = new TextSimilarityProResponse();
        this.request("TextSimilarityPro", req, resp, cb);
    }

    /**
     * 句子相似度接口能够基于深度学习技术来计算一个源句子和多个目标句子的相似度，相似度分值越大的两个句子在语义上越相似。目前仅支持短文本（不超过500字符）的相似度计算，长文本的相似度计算也即将推出。

鉴于句子相似度是一个应用非常广泛的功能，腾讯云自然语言处理团队在Bert等领先的深度神经网络模型的基础上，专门针对文本相似任务进行了优化，并持续迭代更新。基于句子相似度，可以轻松实现诸如文本去重、相似推荐等功能。

接口将以句子数量为单位消耗资源包，而不是调用接口次数为单位。
     * @param {TextSimilarityRequest} req
     * @param {function(string, TextSimilarityResponse):void} cb
     * @public
     */
    TextSimilarity(req, cb) {
        let resp = new TextSimilarityResponse();
        this.request("TextSimilarity", req, resp, cb);
    }

    /**
     * 情感分析接口能够对带有情感色彩的主观性文本进行分析、处理、归纳和推理，识别出用户的情感倾向，是积极还是消极，并且提供各自概率。

该功能基于千亿级大规模互联网语料和LSTM、BERT等深度神经网络模型进行训练，并持续迭代更新，以保证效果不断提升。
     * @param {SentimentAnalysisRequest} req
     * @param {function(string, SentimentAnalysisResponse):void} cb
     * @public
     */
    SentimentAnalysis(req, cb) {
        let resp = new SentimentAnalysisResponse();
        this.request("SentimentAnalysis", req, resp, cb);
    }

    /**
     * 闲聊服务基于腾讯领先的NLP引擎能力、数据运算能力和千亿级互联网语料数据的支持，同时集成了广泛的知识问答能力，可实现上百种自定义属性配置，以及儿童语言风格及说话方式，从而让聊天变得更睿智、简单和有趣。


     * @param {ChatBotRequest} req
     * @param {function(string, ChatBotResponse):void} cb
     * @public
     */
    ChatBot(req, cb) {
        let resp = new ChatBotResponse();
        this.request("ChatBot", req, resp, cb);
    }

    /**
     * 词法分析接口提供以下三个功能：

1、智能分词：将连续的自然语言文本，切分成具有语义合理性和完整性的词汇序列；

2、词性标注：为每一个词附上对应的词性，例如名词、代词、形容词、动词等；

3、命名实体识别：快速识别文本中的实体，例如人名、地名、机构名等。

所有的功能均基于千亿级大规模互联网语料进行持续迭代更新，以保证效果不断提升，用户无需担心新词发现、歧义消除、调用性能等问题。目前词法分析已经在泛互联网、金融、政务等不同垂直领域提供业务支持，并取得良好的效果。
     * @param {LexicalAnalysisRequest} req
     * @param {function(string, LexicalAnalysisResponse):void} cb
     * @public
     */
    LexicalAnalysis(req, cb) {
        let resp = new LexicalAnalysisResponse();
        this.request("LexicalAnalysis", req, resp, cb);
    }

    /**
     * 基于关键词提取平台，通过对文本内容进行深度分析，提取出文本内容中的关键信息，为用户实现诸如新闻内容关键词自动提取、评论关键词提取等提供基础服务。
     * @param {KeywordsExtractionRequest} req
     * @param {function(string, KeywordsExtractionResponse):void} cb
     * @public
     */
    KeywordsExtraction(req, cb) {
        let resp = new KeywordsExtractionResponse();
        this.request("KeywordsExtraction", req, resp, cb);
    }

    /**
     * 提供对中文文本的自动纠错功能，能够识别输入文本中的错误片段，定位错误并给出正确的文本结果；支持长度不超过128字符（含标点符号）的长文本纠错。

此功能是基于千亿级大规模互联网语料和LSTM、BERT等深度神经网络模型进行训练，并持续迭代更新，以保证效果不断提升，是搜索引擎、语音识别、内容审核等功能更好运行的基础之一。
     * @param {TextCorrectionProRequest} req
     * @param {function(string, TextCorrectionProResponse):void} cb
     * @public
     */
    TextCorrectionPro(req, cb) {
        let resp = new TextCorrectionProResponse();
        this.request("TextCorrectionPro", req, resp, cb);
    }

    /**
     * 删除自定义词库，会附带相应删除词库包含的所有词条。
     * @param {DeleteDictRequest} req
     * @param {function(string, DeleteDictResponse):void} cb
     * @public
     */
    DeleteDict(req, cb) {
        let resp = new DeleteDictResponse();
        this.request("DeleteDict", req, resp, cb);
    }

    /**
     * 相似词接口能够基于同义词库及词向量技术，检索出与输入词语在语义上最相似的若干个词语，可广泛用于检索系统、问答系统、文档归档等场景。
     * @param {SimilarWordsRequest} req
     * @param {function(string, SimilarWordsResponse):void} cb
     * @public
     */
    SimilarWords(req, cb) {
        let resp = new SimilarWordsResponse();
        this.request("SimilarWords", req, resp, cb);
    }

    /**
     * 利用人工智能算法，自动抽取文本中的关键信息并生成指定长度的文本摘要。可用于新闻标题生成、科技文献摘要生成和商品评论摘要等。
     * @param {AutoSummarizationRequest} req
     * @param {function(string, AutoSummarizationResponse):void} cb
     * @public
     */
    AutoSummarization(req, cb) {
        let resp = new AutoSummarizationResponse();
        this.request("AutoSummarization", req, resp, cb);
    }


}
module.exports = NlpClient;
