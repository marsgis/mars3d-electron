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

import{a as T}from"./chunk-WD6M6X6I.js";import"./chunk-LMZNZ6KH.js";import{a as l}from"./chunk-NV6ZGELT.js";import"./chunk-IWUJ7CPD.js";import{a as G}from"./chunk-NGP4QSKS.js";import{a as C}from"./chunk-YMDAYB54.js";import"./chunk-Z4JN7R2Z.js";import"./chunk-DWGCCO7G.js";import"./chunk-HDHZC6TC.js";import"./chunk-J4ZUA6IA.js";import"./chunk-CXNWOOVT.js";import{a as L}from"./chunk-Q26TGCYI.js";import"./chunk-YJWIJZYD.js";import"./chunk-37N4QD3I.js";import"./chunk-PFVJISM4.js";import{a as w}from"./chunk-CYQ3GSN4.js";import{a as O}from"./chunk-O5WQMUB2.js";import{b,c as d,d as k}from"./chunk-7TKAWTXB.js";import{c as P}from"./chunk-6C2ABNTW.js";import"./chunk-D3W5UFFV.js";import"./chunk-44T2XLYR.js";import"./chunk-DFQCWJ4U.js";import{a as H}from"./chunk-JAPMFKHE.js";import"./chunk-7JNGN6XH.js";import"./chunk-44XAIE77.js";import{c as g}from"./chunk-E6HFV6ES.js";import{a as y,c as u}from"./chunk-I6F4ELN2.js";import"./chunk-GRGNWW5F.js";import{b as m}from"./chunk-GBSJMDRT.js";import{e as f}from"./chunk-5A3IQCUZ.js";function E(o){let e=o.length,t=new Float64Array(e*3),i=w.createTypedArray(e,e*2),r=0,a=0;for(let n=0;n<e;n++){let p=o[n];t[r++]=p.x,t[r++]=p.y,t[r++]=p.z,i[a++]=n,i[a++]=(n+1)%e}let s=new O({position:new k({componentDatatype:H.DOUBLE,componentsPerAttribute:3,values:t})});return new d({attributes:s,indices:i,primitiveType:b.LINES})}function c(o){o=o??u.EMPTY_OBJECT;let e=o.polygonHierarchy;m.defined("options.polygonHierarchy",e),this._polygonHierarchy=e,this._workerName="createCoplanarPolygonOutlineGeometry",this.packedLength=l.computeHierarchyPackedLength(e,y)+1}c.fromPositions=function(o){o=o??u.EMPTY_OBJECT,m.defined("options.positions",o.positions);let e={polygonHierarchy:{positions:o.positions}};return new c(e)};c.pack=function(o,e,t){return m.typeOf.object("value",o),m.defined("array",e),t=t??0,t=l.packPolygonHierarchy(o._polygonHierarchy,e,t,y),e[t]=o.packedLength,e};var v={polygonHierarchy:{}};c.unpack=function(o,e,t){m.defined("array",o),e=e??0;let i=l.unpackPolygonHierarchy(o,e,y);e=i.startingIndex,delete i.startingIndex;let r=o[e];return f(t)||(t=new c(v)),t._polygonHierarchy=i,t.packedLength=r,t};c.createGeometry=function(o){let e=o._polygonHierarchy,t=e.positions;if(t=L(t,y.equalsEpsilon,!0),t.length<3||!T.validOutline(t))return;let r=l.polygonOutlinesFromHierarchy(e,!1);if(r.length===0)return;let a=[];for(let p=0;p<r.length;p++){let _=new G({geometry:E(r[p])});a.push(_)}let s=C.combineInstances(a)[0],n=P.fromPoints(e.positions);return new d({attributes:s.attributes,indices:s.indices,primitiveType:s.primitiveType,boundingSphere:n})};var h=c;function A(o,e){return f(e)&&(o=h.unpack(o,e)),o._ellipsoid=g.clone(o._ellipsoid),h.createGeometry(o)}var Z=A;export{Z as default};
