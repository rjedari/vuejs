/* eslint-disable @typescript-eslint/no-unused-vars */
import Vue from "vue";
import component from "vue-class-component";


@component
export class ValidationMixin extends Vue{
    public required<T>(value: T): boolean {
        return !!value;
      }
      public mustNumber(value: string): boolean {
        const regex = /^[0-9]+$/;
        return regex.test(value);
      }
      public isEmail(value: string): boolean {
        const regex =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
        return regex.test(value);
      }
      public lengthNumber(value: string): any {
    
         const validate = value.slice(0,2)
         if(validate === "09" ){
          return true 
         }
       
      }
        public minChar(value: string,min:number): boolean {
        return value.length > min
      }
}