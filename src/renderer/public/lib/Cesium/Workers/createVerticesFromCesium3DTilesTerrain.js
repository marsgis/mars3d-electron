/**
 * @license
 * Cesium - https://github.com/CesiumGS/cesium
 * Version 1.139.0
 *
 * Copyright 2011-2022 Cesium Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Columbus View (Pat. Pend.)
 *
 * Portions licensed separately.
 * See https://github.com/CesiumGS/cesium/blob/main/LICENSE.md for full licensing details.
 */

import{a as u}from"./chunk-BHFRS4MP.js";import"./chunk-OCARMQRH.js";import"./chunk-SLA6JXEF.js";import{a as f}from"./chunk-EIDU6YYM.js";import"./chunk-OKDP3TXJ.js";import"./chunk-LMZNZ6KH.js";import"./chunk-Z4JN7R2Z.js";import"./chunk-HDHZC6TC.js";import"./chunk-J4ZUA6IA.js";import"./chunk-37N4QD3I.js";import"./chunk-PFVJISM4.js";import"./chunk-CYQ3GSN4.js";import"./chunk-6C2ABNTW.js";import"./chunk-D3W5UFFV.js";import"./chunk-44T2XLYR.js";import"./chunk-DFQCWJ4U.js";import"./chunk-JAPMFKHE.js";import"./chunk-7JNGN6XH.js";import"./chunk-44XAIE77.js";import"./chunk-E6HFV6ES.js";import"./chunk-I6F4ELN2.js";import"./chunk-GRGNWW5F.js";import"./chunk-GBSJMDRT.js";import"./chunk-5A3IQCUZ.js";function a(c,d){return u.createMesh(c).then(function(e){let t=e.vertices.buffer,r=e.indices.buffer,s=e.westIndicesSouthToNorth.buffer,o=e.southIndicesEastToWest.buffer,i=e.eastIndicesNorthToSouth.buffer,n=e.northIndicesWestToEast.buffer;return d.push(t,r,s,o,i,n),{verticesBuffer:t,indicesBuffer:r,vertexCountWithoutSkirts:e.vertexCountWithoutSkirts,indexCountWithoutSkirts:e.indexCountWithoutSkirts,encoding:e.encoding,westIndicesBuffer:s,southIndicesBuffer:o,eastIndicesBuffer:i,northIndicesBuffer:n}})}var T=f(a);export{T as default};
