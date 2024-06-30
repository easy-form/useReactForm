"use strict";(self.webpackChunkreact_form_simple=self.webpackChunkreact_form_simple||[]).push([[7392],{75705:function(c,n,a){a.r(n);var m=a(38645),u=a(35532),h=a(26321),_=a(37402),p=a(10288),f=a(51705),v=a(67915),y=a(66313),t=a(93533),x=a(60823),I=a(33865),b=a(19919),g=a(93487),j=a(80557),r=a(66881),s=a(80761),i=a(67294),e=a(85893);function o(){var d=(0,r.eL)(),P=d.texts;return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h1",{id:"useform-return-values",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#useform-return-values",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"useForm Return Values"]}),(0,e.jsxs)("h3",{id:"render",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#render",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"render"]})]}),(0,e.jsx)(t.Z,{apiInstance:'{"defaultValue":null,"name":"render","type":{"name":"(bindId: any, config?: RenderConfigType | undefined) => (parameter: RenderReturnFnArgTypes) => ReactNode"},"tags":{"infoTitle":"Render Config","infoPath":"docs_api_apiDocs_renderConfig","description":"The form item rendering function accepts two parameters, the first parameter is the form item field, and the second parameter is the form item configuration.","localKey":"API.useForm.render.desc","resetType":"(bindId: any, [config]) => (parameter: ReactNode | (args: RenderFnReturnFnCallbackArgTypes) => ReactNode) => ReactNode"}}',apiinstance:'{"defaultValue":null,"name":"render","type":{"name":"(bindId: any, config?: RenderConfigType | undefined) => (parameter: RenderReturnFnArgTypes) => ReactNode"},"tags":{"infoTitle":"Render Config","infoPath":"docs_api_apiDocs_renderConfig","description":"The form item rendering function accepts two parameters, the first parameter is the form item field, and the second parameter is the form item configuration.","localKey":"API.useForm.render.desc","resetType":"(bindId: any, [config]) => (parameter: ReactNode | (args: RenderFnReturnFnCallbackArgTypes) => ReactNode) => ReactNode"}}'}),(0,e.jsx)("div",{className:"markdown",children:(0,e.jsxs)("h3",{id:"usesubscribe",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#usesubscribe",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"useSubscribe"]})}),(0,e.jsx)(t.Z,{apiInstance:'{"defaultValue":null,"name":"useSubscribe","type":{"name":"UseSubscribe<null>"},"tags":{"description":"Subscribe to hooks for form items or the entire form. Receives a function whose return parameter is the latest model data of the form. The return value is the data that needs to be subscribed.","resetType":"UseSubscribe<T>(({ model }) => any)","localKey":"API.useForm.useSubscribe.desc"}}',apiinstance:'{"defaultValue":null,"name":"useSubscribe","type":{"name":"UseSubscribe<null>"},"tags":{"description":"Subscribe to hooks for form items or the entire form. Receives a function whose return parameter is the latest model data of the form. The return value is the data that needs to be subscribed.","resetType":"UseSubscribe<T>(({ model }) => any)","localKey":"API.useForm.useSubscribe.desc"}}'}),(0,e.jsx)("div",{className:"markdown",children:(0,e.jsxs)("h3",{id:"usewatch",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#usewatch",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"useWatch"]})}),(0,e.jsx)(t.Z,{apiInstance:'{"defaultValue":null,"name":"useWatch","type":{"name":"UseWatch<null>"},"tags":{"description":"A hook for observing changes in form data. Receive two functions, the first function returns the model data that needs to be observed, and the second parameter is the callback executed when the observed model data changes. If you want to observe multiple data, the first function needs to return an array. Allows returning a string if only one is observed. The second function will return two callback parameters. The first parameter is the value after the change, and the second parameter is the value before the change. The returned parameter type will be based on the return value type of the first function. If If a function returns a string, the type of the callback parameter will also be value, otherwise it will be an array.","localKey":"API.useForm.useWatch.desc","resetType":"UseWatch<T>(({ model }) => string | string[], (value, preValue) => void)"}}',apiinstance:'{"defaultValue":null,"name":"useWatch","type":{"name":"UseWatch<null>"},"tags":{"description":"A hook for observing changes in form data. Receive two functions, the first function returns the model data that needs to be observed, and the second parameter is the callback executed when the observed model data changes. If you want to observe multiple data, the first function needs to return an array. Allows returning a string if only one is observed. The second function will return two callback parameters. The first parameter is the value after the change, and the second parameter is the value before the change. The returned parameter type will be based on the return value type of the first function. If If a function returns a string, the type of the callback parameter will also be value, otherwise it will be an array.","localKey":"API.useForm.useWatch.desc","resetType":"UseWatch<T>(({ model }) => string | string[], (value, preValue) => void)"}}'}),(0,e.jsx)("div",{className:"markdown",children:(0,e.jsxs)("h3",{id:"model",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#model",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"model"]})}),(0,e.jsx)(t.Z,{apiInstance:`{"defaultValue":null,"name":"model","type":{"name":"null"},"tags":{"resetType":"Object","localKey":"API.useForm.model.desc","description":"Form model data. The value of the model is always the latest value after the form item is controlled. Model is usually used when submitting form data and internal values in controlled form items. But please don't use it to re-render the view outside the form item, it will not re-render the view outside the form. If you need to render the latest value externally, use use-$usubscribe to subscribe to the value."}}`,apiinstance:`{"defaultValue":null,"name":"model","type":{"name":"null"},"tags":{"resetType":"Object","localKey":"API.useForm.model.desc","description":"Form model data. The value of the model is always the latest value after the form item is controlled. Model is usually used when submitting form data and internal values in controlled form items. But please don't use it to re-render the view outside the form item, it will not re-render the view outside the form. If you need to render the latest value externally, use use-$usubscribe to subscribe to the value."}}`}),(0,e.jsx)("div",{className:"markdown",children:(0,e.jsxs)("h3",{id:"setstate",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#setstate",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"setState"]})}),(0,e.jsx)(t.Z,{apiInstance:'{"defaultValue":null,"name":"setState","type":{"name":"() => void"},"tags":{"localKey":"API.useForm.setState.desc","description":"Manually re render the view. If you need to re render the view externally, you can call set-$ustate to re render the current component tree. Abandoned after version 1.4.1, please use the force-$uupdate method instead.","resetType":"Function","deprecated":"This API will be discontinued after 1.4.1, please use the force-$uupdate function instead"}}',apiinstance:'{"defaultValue":null,"name":"setState","type":{"name":"() => void"},"tags":{"localKey":"API.useForm.setState.desc","description":"Manually re render the view. If you need to re render the view externally, you can call set-$ustate to re render the current component tree. Abandoned after version 1.4.1, please use the force-$uupdate method instead.","resetType":"Function","deprecated":"This API will be discontinued after 1.4.1, please use the force-$uupdate function instead"}}'}),(0,e.jsx)("div",{className:"markdown",children:(0,e.jsxs)("h3",{id:"forceupdate",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#forceupdate",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"forceUpdate"]})}),(0,e.jsx)(t.Z,{apiInstance:'{"defaultValue":null,"name":"forceUpdate","type":{"name":"(delay?: boolean | undefined) => void"},"tags":{"description":"Manually re-render the view. If you need to re-render the view externally, you can call set-$ustate to re-render the current component tree.","localKey":"API.useForm.forceUpdate.desc","version":"1.4.1"}}',apiinstance:'{"defaultValue":null,"name":"forceUpdate","type":{"name":"(delay?: boolean | undefined) => void"},"tags":{"description":"Manually re-render the view. If you need to re-render the view externally, you can call set-$ustate to re-render the current component tree.","localKey":"API.useForm.forceUpdate.desc","version":"1.4.1"}}'}),(0,e.jsx)("div",{className:"markdown",children:(0,e.jsxs)("h3",{id:"setvalues",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#setvalues",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"setValues"]})}),(0,e.jsx)(t.Z,{apiInstance:'{"defaultValue":null,"name":"setValues","type":{"name":"(values: Record<string, any>) => void"},"tags":{"description":"Set values uniformly for form items","localKey":"API.form.setValues.desc","param":"values"}}',apiinstance:'{"defaultValue":null,"name":"setValues","type":{"name":"(values: Record<string, any>) => void"},"tags":{"description":"Set values uniformly for form items","localKey":"API.form.setValues.desc","param":"values"}}'}),(0,e.jsx)("div",{className:"markdown",children:(0,e.jsxs)("h3",{id:"clearvalidate",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#clearvalidate",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"clearValidate"]})}),(0,e.jsx)(t.Z,{apiInstance:'{"defaultValue":null,"name":"clearValidate","type":{"name":"(bindId?: ValidateBindIds) => void"},"tags":{"description":"Clear verification information","localKey":"API.form.clearValidate.desc","resetType":"(bindId?: string | string[]) => void"}}',apiinstance:'{"defaultValue":null,"name":"clearValidate","type":{"name":"(bindId?: ValidateBindIds) => void"},"tags":{"description":"Clear verification information","localKey":"API.form.clearValidate.desc","resetType":"(bindId?: string | string[]) => void"}}'}),(0,e.jsx)("div",{className:"markdown",children:(0,e.jsxs)("h3",{id:"removevalidator",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#removevalidator",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"removeValidator"]})}),(0,e.jsx)(t.Z,{apiInstance:'{"defaultValue":null,"name":"removeValidator","type":{"name":"(bindId?: ValidateBindIds) => void"},"tags":{"description":"Remove the validation rules. When the form is validated later, the validation will not be performed.","resetType":"(bindId?: string | string[]) => void","localKey":"API.form.removeValidator.desc"}}',apiinstance:'{"defaultValue":null,"name":"removeValidator","type":{"name":"(bindId?: ValidateBindIds) => void"},"tags":{"description":"Remove the validation rules. When the form is validated later, the validation will not be performed.","resetType":"(bindId?: string | string[]) => void","localKey":"API.form.removeValidator.desc"}}'}),(0,e.jsx)("div",{className:"markdown",children:(0,e.jsxs)("h3",{id:"reapplyvalidator",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#reapplyvalidator",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"reapplyValidator"]})}),(0,e.jsx)(t.Z,{apiInstance:'{"defaultValue":null,"name":"reapplyValidator","type":{"name":"(bindId?: ValidateBindIds) => void"},"tags":{"description":"Reapply for form item verification","localKey":"API.form.reapplyValidator.desc","resetType":"(bindId?: string | string[]) => void"}}',apiinstance:'{"defaultValue":null,"name":"reapplyValidator","type":{"name":"(bindId?: ValidateBindIds) => void"},"tags":{"description":"Reapply for form item verification","localKey":"API.form.reapplyValidator.desc","resetType":"(bindId?: string | string[]) => void"}}'}),(0,e.jsx)("div",{className:"markdown",children:(0,e.jsxs)("h3",{id:"setvalue",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#setvalue",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"setValue"]})}),(0,e.jsx)(t.Z,{apiInstance:'{"defaultValue":null,"name":"setValue","type":{"name":"(bindId: any, value: any) => void"},"tags":{"description":"Set form item value","localKey":"API.form.setValue.desc","param":"bindId"}}',apiinstance:'{"defaultValue":null,"name":"setValue","type":{"name":"(bindId: any, value: any) => void"},"tags":{"description":"Set form item value","localKey":"API.form.setValue.desc","param":"bindId"}}'}),(0,e.jsx)("div",{className:"markdown",children:(0,e.jsxs)("h3",{id:"seterror",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#seterror",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"setError"]})}),(0,e.jsx)(t.Z,{apiInstance:'{"defaultValue":null,"name":"setError","type":{"name":"(bindId: any, message?: ReactNode) => void"},"tags":{"description":"Manually calling to set the error message will not trigger the on-$uerror event","localKey":"API.formItem.setError.desc","version":"1.3.0","resetType":"(bindId: string | string[], message?: React.ReactNode) => void"}}',apiinstance:'{"defaultValue":null,"name":"setError","type":{"name":"(bindId: any, message?: ReactNode) => void"},"tags":{"description":"Manually calling to set the error message will not trigger the on-$uerror event","localKey":"API.formItem.setError.desc","version":"1.3.0","resetType":"(bindId: string | string[], message?: React.ReactNode) => void"}}'}),(0,e.jsx)("div",{className:"markdown",children:(0,e.jsxs)("h3",{id:"validate",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#validate",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"validate"]})}),(0,e.jsx)(t.Z,{apiInstance:'{"defaultValue":null,"name":"validate","type":{"name":"() => Promise<unknown>"},"tags":{"localKey":"API.form.share.validate.desc","description":"Form validation."}}',apiinstance:'{"defaultValue":null,"name":"validate","type":{"name":"() => Promise<unknown>"},"tags":{"localKey":"API.form.share.validate.desc","description":"Form validation."}}'}),(0,e.jsx)("div",{className:"markdown",children:(0,e.jsxs)("h3",{id:"reset",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#reset",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"reset"]})}),(0,e.jsx)(t.Z,{apiInstance:'{"defaultValue":null,"name":"reset","type":{"name":"() => void"},"tags":{"description":"Reset the form.","localKey":"API.form.share.reset.desc"}}',apiinstance:'{"defaultValue":null,"name":"reset","type":{"name":"() => void"},"tags":{"description":"Reset the form.","localKey":"API.form.share.reset.desc"}}'}),(0,e.jsx)("div",{className:"markdown",children:(0,e.jsxs)("h3",{id:"contextprops",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#contextprops",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"contextProps"]})}),(0,e.jsx)(t.Z,{apiInstance:'{"defaultValue":null,"name":"contextProps","type":{"name":"ContextProps"},"tags":{"localKey":"API.form.global.props.form.share.contextProps","resetType":"ContextProps","infoTitle":"prop","infoPath":"docs_api_apiDocs_contextProps","description":"Form item option life cycle. Where dependencies are collected for the entire form"}}',apiinstance:'{"defaultValue":null,"name":"contextProps","type":{"name":"ContextProps"},"tags":{"localKey":"API.form.global.props.form.share.contextProps","resetType":"ContextProps","infoTitle":"prop","infoPath":"docs_api_apiDocs_contextProps","description":"Form item option life cycle. Where dependencies are collected for the entire form"}}'})]})}function l(){return(0,e.jsx)(r.dY,{children:(0,e.jsx)(i.Suspense,{fallback:(0,e.jsx)(s.Z,{}),children:(0,e.jsx)(o,{})})})}n.default=l}}]);
