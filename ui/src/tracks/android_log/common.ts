// Copyright (C) 2018 The Android Open Source Project
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

export const ANDROID_LOGS_TRACK_KIND = 'AndroidLogTrack';

export interface Data {
  start: number;
  end: number;
  resolution: number;

  // Total number of log events within [start, end], before any quantization.
  numEvents: number;

  // Below: data quantized by resolution and aggregated by event priority.

  timestamps: Float64Array;

  // Each Uint8 value has the i-th bit is set if there is at least one log
  // event at the i-th priority level at the corresponding time in |timestamps|.
  priorities: Uint8Array;
}

export interface Config {}
