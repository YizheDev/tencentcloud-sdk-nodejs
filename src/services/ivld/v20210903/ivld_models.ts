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

/**
 * DeleteMedia返回参数结构体
 */
export interface DeleteMediaResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 视频结构化结果
 */
export interface ShowInfo {
  /**
      * 节目日期(只在新闻有效)
注意：此字段可能返回 null，表示取不到有效值。
      */
  Date: string

  /**
      * 台标
注意：此字段可能返回 null，表示取不到有效值。
      */
  Logo: string

  /**
      * 节目名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  Column: string

  /**
      * 来源信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  Source: string

  /**
      * 节目封面
注意：此字段可能返回 null，表示取不到有效值。
      */
  CoverImageURL: string

  /**
      * 节目内容概要列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  SummarySet: Array<string>

  /**
      * 节目片段标题列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  TitleSet: Array<string>

  /**
      * 音频识别结果列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  AudioInfoSet: Array<AudioInfo>

  /**
      * 可视文字识别结果列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  TextInfoSet: Array<TextInfo>

  /**
      * 文本标签列表，包含标签内容和出现信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  TextTagSet: MultiLevelTag

  /**
      * 帧标签列表，包括人物信息，场景信息等
注意：此字段可能返回 null，表示取不到有效值。
      */
  FrameTagSet: MultiLevelTag

  /**
      * 视频下载地址
注意：此字段可能返回 null，表示取不到有效值。
      */
  WebMediaURL: string

  /**
      * 媒资分类信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  MediaClassifierSet: Array<string>

  /**
      * 概要标签信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  SummaryTagSet: Array<string>
}

/**
 * 标签信息结构体

包含多级(最多三级)标签结果，以及这些标签在识别结果中的出现位置
 */
export interface MultiLevelTag {
  /**
      * 树状标签信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  TagSet: Array<L1Tag>

  /**
      * 标签在识别结果中的定位信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  AppearInfo: AppearInfo
}

/**
 * DescribeTasks请求参数结构体
 */
export interface DescribeTasksRequest {
  /**
   * 分页序号，从1开始
   */
  PageNumber?: number

  /**
   * 每个分页所包含的元素数量，最大为50
   */
  PageSize?: number

  /**
   * 任务过滤条件，相关限制参见TaskFilter
   */
  TaskFilter?: TaskFilter

  /**
   * 返回结果排序信息，By字段只支持CreateTimeStamp
   */
  SortBy?: SortBy
}

/**
 * 二级标签信息

请注意，二级标签信息可能不包含三级标签(此时L3TagSet为空)。

 */
export interface L2Tag {
  /**
   * 二级标签名
   */
  Name: string

  /**
      * 从属于此二级标签的三级标签数组
注意：此字段可能返回 null，表示取不到有效值。
      */
  L3TagSet: Array<L3Tag>

  /**
      * 二级标签出现信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  AppearIndexPairSet: Array<AppearIndexPair>

  /**
      * 二级标签首次出现信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  FirstAppear: number
}

/**
 * ImportMedia请求参数结构体
 */
export interface ImportMediaRequest {
  /**
   * 待分析视频的URL，目前只支持*不带签名的*COS地址，长度最长1KB
   */
  URL: string

  /**
   * 待分析视频的MD5，为空时不做校验，否则会做MD5校验，长度必须为32B
   */
  MD5?: string

  /**
   * 待分析视频的名称，指定后可支持筛选，最多100个中文字符
   */
  Name?: string
}

/**
 * DescribeMedias请求参数结构体
 */
export interface DescribeMediasRequest {
  /**
   * 分页序号，从1开始
   */
  PageNumber: number

  /**
   * 每个分页所包含的元素数量，最大为50
   */
  PageSize: number

  /**
   * 列举过滤条件，相关限制相见MediaFilter
   */
  MediaFilter?: MediaFilter

  /**
   * 返回结果排序信息，By字段只支持CreateTime
   */
  SortBy?: SortBy
}

/**
 * 关键词在视觉结果中的定位信息
 */
export interface VideoAppearInfo {
  /**
   * 视觉信息起始时间戳，从0开始
   */
  StartTimeStamp: number

  /**
      * 视觉信息终止时间戳，从0开始
关键词在视觉信息中的区间为[StartTimeStamp, EndTimeStamp)
      */
  EndTimeStamp: number

  /**
   * 关键词在视觉信息中的封面图片
   */
  ImageURL: string
}

/**
 * 可视文本识别结果信息(OCR)
 */
export interface TextInfo {
  /**
   * OCR提取的内容
   */
  Content: string

  /**
   * OCR起始时间戳，从0开始
   */
  StartTimeStamp: number

  /**
   * OCR结束时间戳，从0开始
   */
  EndTimeStamp: number

  /**
   * OCR标签信息
   */
  Tag: string
}

/**
 * DescribeTask返回参数结构体
 */
export interface DescribeTaskResponse {
  /**
      * 任务信息，详情参见TaskInfo的定义
注意：此字段可能返回 null，表示取不到有效值。
      */
  TaskInfo: TaskInfo

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 出现信息索引对

AppearIndex可选值定义如下：

| AppearIndex名称 | AppearIndex取值 | AppearIndex描述 |
|---|---|---|
| APPEAR_INDEX_INVALID | 0 | 非法的任务状态 |
| APPEAR_INDEX_AUDIO | 1 | 音频出现信息|
| APPEAR_INDEX_TEXT | 2 | 可视文本出现信息|
| APPEAR_INDEX_VIDEO | 3 | 视频出现信息|

例如，当AppearIndex=1，Index=15，则意味着目标关键词出现在第16个(Index计数从0开始)音频文字识别结果之中
 */
export interface AppearIndexPair {
  /**
   * 出现信息，取值范围为[1，3]
   */
  AppearIndex: number

  /**
   * AppearInfo中AppearIndex对应元素的第Index元素，从0开始技术
   */
  Index: number
}

/**
 * DescribeTaskDetail返回参数结构体
 */
export interface DescribeTaskDetailResponse {
  /**
   * 任务信息，不包含任务结果
   */
  TaskInfo: TaskInfo

  /**
   * 任务结果数据，只在任务结束时返回
   */
  TaskData: Data

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateTask返回参数结构体
 */
export interface CreateTaskResponse {
  /**
   * 智能标签视频分析任务ID
   */
  TaskId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTaskDetail请求参数结构体
 */
export interface DescribeTaskDetailRequest {
  /**
   * 创建任务返回的TaskId
   */
  TaskId: string
}

/**
 * 任务筛选条件结构体
 */
export interface TaskFilter {
  /**
   * 媒资文件类型
   */
  MediaTypeSet?: Array<number>

  /**
   * 待筛选的任务状态列表
   */
  TaskStatusSet?: Array<number>

  /**
   * 待筛选的任务名称数组
   */
  TaskNameSet?: Array<string>

  /**
   * TaskId数组
   */
  TaskIdSet?: Array<string>

  /**
   * 媒资文件名数组
   */
  MediaNameSet?: Array<string>

  /**
   * 媒资语言类型
   */
  MediaLangSet?: Array<number>

  /**
   * 媒资素材一级类型
   */
  MediaLabelSet?: Array<number>
}

/**
 * 关键词在文本中的定位信息

Position为关键词在文本中的偏移量，从0开始。例如，给定文本结果"欢迎收看新闻三十分”，以及关键词"新闻三十分"，那么StartPosition的值为4，EndPosition的值为9
 */
export interface TextAppearInfo {
  /**
   * 文本结果数组中的下标
   */
  Index: number

  /**
   * 关键词在文本中出现的起始偏移量(包含)
   */
  StartPosition: number

  /**
   * 关键词在文本中出现的结束偏移量(不包含)
   */
  EndPosition: number
}

/**
 * DescribeMedia返回参数结构体
 */
export interface DescribeMediaResponse {
  /**
      * 媒资信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  MediaInfo: MediaInfo

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 任务结果数据
 */
export interface Data {
  /**
      * 节目粒度结构化结果
注意：此字段可能返回 null，表示取不到有效值。
      */
  ShowInfo: ShowInfo
}

/**
 * DescribeTask请求参数结构体
 */
export interface DescribeTaskRequest {
  /**
   * CreateTask返回的任务ID，最长32B
   */
  TaskId: string
}

/**
 * 一级标签信息

请注意，一级标签信息可能不包含二级标签(此时L2TagSet为空)。在这种情况下，一级标签可直接包含出现信息。
 */
export interface L1Tag {
  /**
   * 一级标签名
   */
  Name: string

  /**
      * 二级标签数组
注意：此字段可能返回 null，表示取不到有效值。
      */
  L2TagSet: Array<L2Tag>

  /**
      * 一级标签出现信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  AppearIndexPairSet: Array<AppearIndexPair>

  /**
      * 一级标签首次出现信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  FirstAppear: number
}

/**
 * DescribeTasks返回参数结构体
 */
export interface DescribeTasksResponse {
  /**
   * 满足过滤条件的任务总数量
   */
  TotalCount: number

  /**
      * 满足过滤条件的任务数组
注意：此字段可能返回 null，表示取不到有效值。
      */
  TaskInfoSet: Array<TaskInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 音频识别结果信息
 */
export interface AudioInfo {
  /**
   * ASR提取的文字信息
   */
  Content: string

  /**
   * ASR起始时间戳，从0开始
   */
  StartTimeStamp: number

  /**
   * ASR结束时间戳，从0开始
   */
  EndTimeStamp: number

  /**
   * ASR提取的音频标签
   */
  Tag: string
}

/**
 * CreateTask请求参数结构体
 */
export interface CreateTaskRequest {
  /**
   * 媒资文件ID，最长32B
   */
  MediaId: string

  /**
   * 媒资素材先验知识，相关限制参考MediaPreknownInfo
   */
  MediaPreknownInfo: MediaPreknownInfo

  /**
   * 任务名称，最长100个中文字符
   */
  TaskName?: string

  /**
   * 是否上传转码后的视频，仅设置true时上传，默认为false
   */
  UploadVideo?: boolean
}

/**
 * 三级标签信息。

三级标签不再包含任何子标签。所有三级标签都对应着识别结果中的出现信息，出现信息使用AppearIndexPairSet定位。
 */
export interface L3Tag {
  /**
   * 三级标签名
   */
  Name: string

  /**
      * 三级标签出现信息索引数组
注意：此字段可能返回 null，表示取不到有效值。
      */
  AppearIndexPairSet: Array<AppearIndexPair>

  /**
      * 三级标签首次出现信息，可选值为[1,3]
注意：此字段可能返回 null，表示取不到有效值。
      */
  FirstAppear: number
}

/**
 * 媒资过滤条件


 */
export interface MediaFilter {
  /**
      * 媒资名称过滤条件
注意：此字段可能返回 null，表示取不到有效值。
      */
  MediaNameSet?: Array<string>

  /**
      * 媒资状态数组，媒资状态可选值参见MediaInfo
注意：此字段可能返回 null，表示取不到有效值。
      */
  StatusSet?: Array<number>

  /**
      * 媒资ID数组
注意：此字段可能返回 null，表示取不到有效值。
      */
  MediaIdSet?: Array<string>
}

/**
 * 描述输入媒资的先验知识，例如文件类型(视频)，媒体类型(新闻/综艺等)

MediaPreknownInfo.MediaType:

| MediaType 名称|  MediaType取值 | MediaType描述 |
|---|---|---|
| MEDIA_TYPE_INVALID | 0 | 非法的媒资文件类型 | 
| MEDIA_TYPE_IMAGE | 1 | 图片，当前不支持 |
| MEDIA_TYPE_VIDEO | 2 | 视频，当前只支持此类型媒资文件 |

MediaPreknownInfo.MediaLabel:

| MediaLabel名称 | MediaLabel取值 | MediaLabel描述 |
|---|---|---|
| MEDIA_LABEL_INVALID | 0 | 非法的一级媒资素材类型 |
| MEDIA_LABEL_NEWS | 1 | 新闻 |
| MEDIA_LABEL_ENTERTAINMENT | 2 | 综艺|
| MEDIA_LABEL_INTERNET_INFO | 3 | 互联网资讯 | 
| MEDIA_LABEL_MOVIE | 4 | 电影 |
| MEDIA_LABEL_SERIES | 5 | 电视连续剧 |
| MEDIA_LABEL_SPECIAL | 6 | 专题 |
| MEDIA_LABEL_SPORT | 7 | 体育 |

MediaPreknownInfo.MediaSecondLabel
请注意：**当且仅当MediaLabel=2(综艺)时MediaSecondLabel才有意义**

| MediaSecondLabel名称 | MediaSecondLabel取值 | MediaSecondLabel 描述|
|---|---|---|
| MEDIA_SECOND_LABEL_INVALID |  0  | 非法的MediaSecondLabel |
| MEDIA_SECOND_LABEL_EVENING | 1 | 综艺晚会 |
| MEDIA_SECOND_LABEL_OTHERS | 2 | 其他 |

MediaMeta.MediaLang

| MediaLang名称 | MediaLang取值 | MediaLang描述 |
|---|---|---|
| MEDIA_LANG_INVALID | 0 | 非法的MediaLang |
| MEDIA_LANG_MANDARIN | 1 | 普通话 |
| MEDIA_LANG_CANTONESE | 2 | 粤语 | 
 */
export interface MediaPreknownInfo {
  /**
   * 媒资文件类型，参见MediaPreknownInfo结构体定义
   */
  MediaType: number

  /**
   * 媒资素材一级类型，参见MediaPreknownInfo结构体定义
   */
  MediaLabel: number

  /**
      * 媒资素材二级类型，参见MediaPreknownInfo结构体定义
注意：此字段可能返回 null，表示取不到有效值。
      */
  MediaSecondLabel: number

  /**
      * 媒资音频类型，参见MediaPreknownInfo结构体定义
注意：此字段可能返回 null，表示取不到有效值。
      */
  MediaLang?: number
}

/**
 * 出现信息结构

包含关键词在音频转文字(ASR)，图片转文字(OCR)以及视频结果中的出现信息

 */
export interface AppearInfo {
  /**
      * 关键词在音频文本结果中的出现位置数组
注意：此字段可能返回 null，表示取不到有效值。
      */
  AudioAppearSet: Array<TextAppearInfo>

  /**
      * 关键词在可视文本结果中的出现位置数组
注意：此字段可能返回 null，表示取不到有效值。
      */
  TextAppearSet: Array<TextAppearInfo>

  /**
      * 关键词在视频信息中的出现位置数组
注意：此字段可能返回 null，表示取不到有效值。
      */
  VideoAppearSet: Array<VideoAppearInfo>
}

/**
 * DeleteMedia请求参数结构体
 */
export interface DeleteMediaRequest {
  /**
   * 媒资文件在系统中的ID
   */
  MediaId: string
}

/**
 * ImportMedia返回参数结构体
 */
export interface ImportMediaResponse {
  /**
   * 媒资文件在系统中的ID
   */
  MediaId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeMedias返回参数结构体
 */
export interface DescribeMediasResponse {
  /**
   * 满足过滤条件的媒资视频总数量
   */
  TotalCount: number

  /**
      * 满足过滤条件的媒资信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  MediaInfoSet: Array<MediaInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 媒资信息结构体

媒资状态定义如下：

| 状态名 | 状态值 | 状态描述 | 
|---|---|---|
| MEDIA_STATUS_INVALID | 0 | 非法状态|
| MEDIA_STATUS_WAITING| 1 | 等待中 |
| MEDIA_STATUS_DOWNLOADING | 2 | 下载中 |
| MEDIA_STATUS_DOWNLOADED | 3 | 下载完成 |
| MEDIA_STATUS_DOWNLOAD_FAILED | 4 | 下载失败 |
| MEDIA_STATUS_TRANSCODING | 5 | 转码中 |
| MEDIA_STATUS_TRANSCODED | 6 | 转码完成 | 
| MEDIA_STATUS_TRANCODE_FAILED | 7 | 转码失败 |
| MEDIA_STATUS_SUCCESS | 8 | 媒资文件状态就绪，可发起任务 |
| MEDIA_STATUS_EXPIRED | 9 | 媒资文件已过期 |

 */
export interface MediaInfo {
  /**
   * 媒资ID
   */
  MediaId: string

  /**
      * 媒资名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  Name: string

  /**
      * 媒资下载地址
注意：此字段可能返回 null，表示取不到有效值。
      */
  DownLoadURL: string

  /**
      * 媒资状态，取值参看上方表格
注意：此字段可能返回 null，表示取不到有效值。
      */
  Status: number

  /**
      * 若状态为失败，表示失败原因
注意：此字段可能返回 null，表示取不到有效值。
      */
  FailedReason: string

  /**
      * 媒资视频元信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  Metadata: MediaMetadata

  /**
      * 导入视频进度，取值范围为[0,100]
注意：此字段可能返回 null，表示取不到有效值。
      */
  Progress: number
}

/**
 * 排序条件
 */
export interface SortBy {
  /**
   * 排序字段，默认为CreateTime
   */
  By?: string

  /**
   * true表示降序，false表示升序
   */
  Descend?: boolean
}

/**
 * 媒资文件视频元信息，包括分辨率，帧率，码率等
 */
export interface MediaMetadata {
  /**
   * 媒资视频文件大小
   */
  FileSize: number

  /**
   * 媒资视频文件MD5
   */
  MD5: string

  /**
      * 媒资视频时长，单位为秒
注意：此字段可能返回 null，表示取不到有效值。
      */
  Duration: number

  /**
      * 媒资视频总帧数
注意：此字段可能返回 null，表示取不到有效值。
      */
  NumFrames: number

  /**
      * 媒资视频宽度，单位为像素
注意：此字段可能返回 null，表示取不到有效值。
      */
  Width: number

  /**
      * 媒资视频高度，单位为像素
注意：此字段可能返回 null，表示取不到有效值。
      */
  Height: number

  /**
      * 媒资视频帧率，单位为Hz
注意：此字段可能返回 null，表示取不到有效值。
      */
  FPS: number

  /**
      * 媒资视频比特率，单位为kbps
注意：此字段可能返回 null，表示取不到有效值。
      */
  BitRate: number
}

/**
 * DescribeMedia请求参数结构体
 */
export interface DescribeMediaRequest {
  /**
   * 导入媒资返回的媒资ID，最长32B
   */
  MediaId: string
}

/**
 * 任务信息

TaskStatus定义如下:

| TaskStatus名称 | TaskStatus取值 | TaskStatus描述 |
|---|---|---|
| TASK_STATUS_INVALID | 0 | 非法的任务状态 |
| TASK_STATUS_WAITING | 1 | 排队中 |
| TASK_STATUS_ANALYSING | 2 | 任务分析中 |
| TASK_STATUS_ANALYSED | 3 | 任务分析完成 |
| TASK_STATUS_SNAPSHOT_CREATING | 4 | 任务结果快照生成中 |
| TASK_STATUS_SNAPSHOT_CREATED | 5 | 任务结果快照生成完成 |
| TASK_STATUS_RESULT_UPLOADING | 6 | 任务结果快照上传中 |
| TASK_STATUS_RESULT_UPLOADED | 7 | 任务结果快照上传完成 |
| TASK_STATUS_SUCCESS | 8 | 任务执行完成 |
| TASK_STATUS_FAILED | 9 | 任务执行失败 |
 */
export interface TaskInfo {
  /**
   * 任务ID
   */
  TaskId: string

  /**
      * 描述任务名称，指定后可根据名称筛选
注意：此字段可能返回 null，表示取不到有效值。
      */
  TaskName: string

  /**
   * 媒资文件ID
   */
  MediaId: string

  /**
   * 任务执行状态
   */
  TaskStatus: number

  /**
      * 任务进度，范围为[0，100]
注意：此字段可能返回 null，表示取不到有效值。
      */
  TaskProgress: number

  /**
      * 任务执行时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  TaskTimeCost: number

  /**
   * 任务创建时间
   */
  TaskCreateTime: string

  /**
      * 任务开始执行时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  TaskStartTime: string

  /**
      * 任务失败原因
注意：此字段可能返回 null，表示取不到有效值。
      */
  FailedReason: string

  /**
   * 任务执行时指定的先验知识
   */
  MediaPreknownInfo: MediaPreknownInfo

  /**
      * 媒资文件名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  MediaName: string
}