#include <hxcpp.h>

#ifndef INCLUDED_HelloWorld
#include <HelloWorld.h>
#endif
#ifndef INCLUDED_Sys
#include <Sys.h>
#endif

Void HelloWorld_obj::__construct()
{
	return null();
}

HelloWorld_obj::~HelloWorld_obj() { }

Dynamic HelloWorld_obj::__CreateEmpty() { return  new HelloWorld_obj; }
hx::ObjectPtr< HelloWorld_obj > HelloWorld_obj::__new()
{  hx::ObjectPtr< HelloWorld_obj > result = new HelloWorld_obj();
	result->__construct();
	return result;}

Dynamic HelloWorld_obj::__Create(hx::DynamicArray inArgs)
{  hx::ObjectPtr< HelloWorld_obj > result = new HelloWorld_obj();
	result->__construct();
	return result;}

Void HelloWorld_obj::main( ){
{
		HX_STACK_PUSH("HelloWorld::main","HelloWorld.hx",4);
		struct _Function_1_1{
			inline static Dynamic Block( ){
				HX_STACK_PUSH("*::closure","HelloWorld.hx",5);
				{
					hx::Anon __result = hx::Anon_obj::Create();
					__result->Add(HX_CSTRING("x") , (int)0,false);
					__result->Add(HX_CSTRING("y") , (int)0,false);
					__result->Add(HX_CSTRING("width") , (int)10,false);
					__result->Add(HX_CSTRING("height") , (int)10,false);
					return __result;
				}
				return null();
			}
		};
		HX_STACK_LINE(5)
		Dynamic box = _Function_1_1::Block();		HX_STACK_VAR(box,"box");
		HX_STACK_LINE(12)
		::Sys_obj::println(HX_CSTRING("Hello, World."));
		HX_STACK_LINE(13)
		::Sys_obj::println((HX_CSTRING("You are using ") + ::Sys_obj::systemName()));
	}
return null();
}


STATIC_HX_DEFINE_DYNAMIC_FUNC0(HelloWorld_obj,main,(void))


HelloWorld_obj::HelloWorld_obj()
{
}

void HelloWorld_obj::__Mark(HX_MARK_PARAMS)
{
	HX_MARK_BEGIN_CLASS(HelloWorld);
	HX_MARK_END_CLASS();
}

void HelloWorld_obj::__Visit(HX_VISIT_PARAMS)
{
}

Dynamic HelloWorld_obj::__Field(const ::String &inName,bool inCallProp)
{
	switch(inName.length) {
	case 4:
		if (HX_FIELD_EQ(inName,"main") ) { return main_dyn(); }
	}
	return super::__Field(inName,inCallProp);
}

Dynamic HelloWorld_obj::__SetField(const ::String &inName,const Dynamic &inValue,bool inCallProp)
{
	return super::__SetField(inName,inValue,inCallProp);
}

void HelloWorld_obj::__GetFields(Array< ::String> &outFields)
{
	super::__GetFields(outFields);
};

static ::String sStaticFields[] = {
	HX_CSTRING("main"),
	String(null()) };

static ::String sMemberFields[] = {
	String(null()) };

static void sMarkStatics(HX_MARK_PARAMS) {
	HX_MARK_MEMBER_NAME(HelloWorld_obj::__mClass,"__mClass");
};

static void sVisitStatics(HX_VISIT_PARAMS) {
	HX_VISIT_MEMBER_NAME(HelloWorld_obj::__mClass,"__mClass");
};

Class HelloWorld_obj::__mClass;

void HelloWorld_obj::__register()
{
	hx::Static(__mClass) = hx::RegisterClass(HX_CSTRING("HelloWorld"), hx::TCanCast< HelloWorld_obj> ,sStaticFields,sMemberFields,
	&__CreateEmpty, &__Create,
	&super::__SGetClass(), 0, sMarkStatics, sVisitStatics);
}

void HelloWorld_obj::__boot()
{
}

