/*
 * This file is part of the TYPO3 CMS project.
 *
 * It is free software; you can redistribute it and/or modify it under
 * the terms of the GNU General Public License, either version 2
 * of the License, or any later version.
 *
 * For the full copyright and license information, please read the
 * LICENSE.txt file that was distributed with this source code.
 *
 * The TYPO3 project - inspiring people to share!
 */
import{Collapse}from"bootstrap";import $ from"jquery";import Sortable from"sortablejs";import AjaxRequest from"@typo3/core/ajax/ajax-request.js";import DocumentService from"@typo3/core/document-service.js";import FlexFormContainerContainer from"@typo3/backend/form-engine/container/flex-form-container-container.js";import FormEngine from"@typo3/backend/form-engine.js";import RegularEvent from"@typo3/core/event/regular-event.js";import{JavaScriptItemProcessor}from"@typo3/core/java-script-item-processor.js";var Selectors;!function(e){e.toggleAllSelector=".t3-form-flexsection-toggle",e.addContainerSelector=".t3js-flex-container-add",e.actionFieldSelector=".t3js-flex-control-action",e.sectionContainerSelector=".t3js-flex-section",e.sectionContentContainerSelector=".t3js-flex-section-content",e.sortContainerButtonSelector=".t3js-sortable-handle"}(Selectors||(Selectors={}));class FlexFormSectionContainer{constructor(e){this.allowRestructure=!1,this.flexformContainerContainers=[],this.updateSorting=e=>{this.container.querySelectorAll(Selectors.actionFieldSelector).forEach((e,t)=>{e.value=t.toString()}),this.updateToggleAllState(),this.flexformContainerContainers.splice(e.newIndex,0,this.flexformContainerContainers.splice(e.oldIndex,1)[0]),document.dispatchEvent(new Event("formengine:flexform:sorting-changed"))},this.sectionContainerId=e,DocumentService.ready().then(t=>{this.container=t.getElementById(e),this.sectionContainer=this.container.querySelector(this.container.dataset.section),this.allowRestructure="1"===this.sectionContainer.dataset.t3FlexAllowRestructure,this.registerEvents(),this.registerContainers()})}static getCollapseInstance(e){return Collapse.getInstance(e)??new Collapse(e,{toggle:!1})}getContainer(){return this.container}isRestructuringAllowed(){return this.allowRestructure}registerEvents(){this.allowRestructure&&(this.registerSortable(),this.registerContainerDeleted()),this.registerToggleAll(),this.registerCreateNewContainer(),this.registerPanelToggle()}registerContainers(){const e=this.container.querySelectorAll(Selectors.sectionContainerSelector);for(let t of e)this.flexformContainerContainers.push(new FlexFormContainerContainer(this,t));this.updateToggleAllState()}getToggleAllButton(){return this.container.querySelector(Selectors.toggleAllSelector)}registerSortable(){new Sortable(this.sectionContainer,{group:this.sectionContainer.id,handle:Selectors.sortContainerButtonSelector,onSort:this.updateSorting})}registerToggleAll(){new RegularEvent("click",e=>{const t="true"===e.target.dataset.expandAll,n=this.container.querySelectorAll(Selectors.sectionContentContainerSelector);for(let e of n)t?FlexFormSectionContainer.getCollapseInstance(e).show():FlexFormSectionContainer.getCollapseInstance(e).hide()}).bindTo(this.getToggleAllButton())}registerCreateNewContainer(){new RegularEvent("click",(e,t)=>{e.preventDefault(),this.createNewContainer(t.dataset)}).delegateTo(this.container,Selectors.addContainerSelector)}createNewContainer(dataset){new AjaxRequest(TYPO3.settings.ajaxUrls.record_flex_container_add).post({vanillaUid:dataset.vanillauid,databaseRowUid:dataset.databaserowuid,command:dataset.command,tableName:dataset.tablename,fieldName:dataset.fieldname,recordTypeValue:dataset.recordtypevalue,dataStructureIdentifier:JSON.parse(dataset.datastructureidentifier),flexFormSheetName:dataset.flexformsheetname,flexFormFieldName:dataset.flexformfieldname,flexFormContainerName:dataset.flexformcontainername}).then(async response=>{const data=await response.resolve(),createdContainer=(new DOMParser).parseFromString(data.html,"text/html").body.firstElementChild;this.flexformContainerContainers.push(new FlexFormContainerContainer(this,createdContainer));const sectionContainer=document.querySelector(dataset.target);if(sectionContainer.insertAdjacentElement("beforeend",createdContainer),data.scriptItems instanceof Array&&data.scriptItems.length>0){const e=new JavaScriptItemProcessor;e.processItems(data.scriptItems)}data.scriptCall&&data.scriptCall.length>0&&$.each(data.scriptCall,(function(index,value){eval(value)})),data.stylesheetFiles&&data.stylesheetFiles.length>0&&$.each(data.stylesheetFiles,(function(e,t){let n=document.createElement("link");n.rel="stylesheet",n.type="text/css",n.href=t,document.head.appendChild(n)})),this.updateToggleAllState(),FormEngine.reinitialize(),FormEngine.Validation.initializeInputFields(),FormEngine.Validation.validate(sectionContainer)})}registerContainerDeleted(){new RegularEvent("formengine:flexform:container-deleted",e=>{const t=e.detail.containerId;this.flexformContainerContainers=this.flexformContainerContainers.filter(e=>e.getStatus().id!==t),FormEngine.Validation.validate(this.container),this.updateToggleAllState()}).bindTo(this.container)}registerPanelToggle(){["hide.bs.collapse","show.bs.collapse"].forEach(e=>{new RegularEvent(e,()=>{this.updateToggleAllState()}).delegateTo(this.container,Selectors.sectionContentContainerSelector)})}updateToggleAllState(){if(this.flexformContainerContainers.length>0){const e=this.flexformContainerContainers.find(Boolean);this.getToggleAllButton().dataset.expandAll=!0===e.getStatus().collapsed?"true":"false"}}}export default FlexFormSectionContainer;