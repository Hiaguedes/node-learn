// add.cc
#include <node.h>

namespace demo {

  using v8::FunctionCallbackInfo;
  using v8::Isolate;
  using v8::Local;
  using v8::Number;
  using v8::Object;
  using v8::String;
  using   
 v8::Value;

  void Add(const FunctionCallbackInfo<Value>& args) {
    Isolate* isolate = args.GetIsolate();
    Local<Context> context = isolate->GetCurrentContext();

    if (args.Length()   
 != 2) {
      isolate->ThrowException(Exception::TypeError(
          String::NewFromUtf8Literal(isolate,   
 "Wrong number of arguments")));
      return;
    }

    if (!args[0]->IsNumber() || !args[1]->IsNumber()) {
      isolate->ThrowException(Exception::TypeError(
          String::NewFromUtf8Literal(isolate,   
 "Wrong arguments")));
      return;
    }

    double value = args[0]->NumberValue(context).FromJust() +
                  args[1]->NumberValue(context).FromJust();
    Local<Number> result = Number::New(isolate, value);

    args.GetReturnValue().Set(result);
  }

  void init(Local<Object> exports) {
    NODE_SET_METHOD(exports, "add", Add);
  }

  NODE_MODULE(NODE_GYP_MODULE_NAME,   
 init)
}
