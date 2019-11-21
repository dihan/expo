import { PermissionResponse, PermissionStatus } from 'unimodules-permissions-interface';

export const MediaTypeOptions = {
  All: 'All',
  Videos: 'Videos',
  Images: 'Images',
} as const;

export const ExportPresets = {
  LowQuality: 'LowQuality',
  MediumQuality: 'MediumQuality',
  HighestQuality: 'HighestQuality',
  Passthrough: 'Passthrough',
  H_264_640x480: 'Hi_264_640x480',
  H_264_960x540: 'H_264_960x540',
  H_264_1280x720: 'H_264_1280x720',
  H_264_1920x1080: 'H_264_1920x1080',
  H_264_3840x2160: 'H_264_3840x2160',
  HEVC_1920x1080: 'HEVC_1920x1080',
  HEVC_3840x2160: 'HEVC_3840x2160',
} as const;

export type ImageInfo = {
  uri: string;
  width: number;
  height: number;
  type?: 'image' | 'video';
};

export type ImagePickerResult = { cancelled: true } | ({ cancelled: false } & ImageInfo);

export type ImagePickerOptions = {
  allowsEditing?: boolean;
  aspect?: [number, number];
  quality?: number;
  allowsMultipleSelection?: boolean;
  mediaTypes?: typeof MediaTypeOptions[keyof typeof MediaTypeOptions];
  exif?: boolean;
  base64?: boolean;
  exportPreset?: typeof ExportPresets[keyof typeof ExportPresets];
};

export type OpenFileBrowserOptions = {
  mediaTypes: typeof MediaTypeOptions[keyof typeof MediaTypeOptions];
  capture?: boolean;
  allowsMultipleSelection: boolean;
};

export { PermissionResponse, PermissionStatus };
