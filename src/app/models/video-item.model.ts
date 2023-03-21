import { TThumbnailItem } from './thumbnail-item.model';

export interface IVideoItem {
  kind: string,
  etag: string,
  id: {
    kind: string,
    videoId: string,
  },
  snippet: {
    publishedAt: string,
    channelId: string,
    title: string,
    description: string,
    thumbnails: {
      default: TThumbnailItem,
      medium: TThumbnailItem,
      high: TThumbnailItem,
      standard: TThumbnailItem,
      maxres: TThumbnailItem
    },
    channelTitle: string,
    tags: string[],
    categoryId: string,
    liveBroadcastContent: string,
    defaultLanguage?: string,
    localized: {
      title: string,
      description: string,
    },
    defaultAudioLanguage: string,
  },
  statistics: {
    viewCount: string,
    likeCount: string,
    favoriteCount: string,
    commentCount: string,
  }
}
