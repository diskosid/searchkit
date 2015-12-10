import * as _ from "lodash"


export function BoolMust(val:any=[]){
  return {bool:{must:val}}
}

export function BoolShould(val:any=[]){
  return {bool:{should:val}}
}

export function SimpleQueryString(query, options={}){
  if(!query){
    return undefined
  }
  return {
    "simple_query_string": _.extend(options,{
      "query":query,
    })
  }
}
export interface TermOptions {
  $name?:string,
  $value?:string|number,
  $remove?:Function,
  $disabled?:boolean
}
export function Term(key, value, options:TermOptions={}){
  const defaultOptions = {
    $disabled:false
  }
  return _.extend({
    term:{
      [key]:value
    }
  }, defaultOptions, options)
}

export function Terms(key, options){
  return {
    terms:_.extend({
      field:key
    }, options)
  }
}