#include <hxcpp.h>

#include <haxe/io/Eof.h>
#include <Sys.h>
#include <cpp/Lib.h>
#include <HelloWorld.h>

void __boot_all()
{
hx::RegisterResources( hx::GetResources() );
::haxe::io::Eof_obj::__register();
::Sys_obj::__register();
::cpp::Lib_obj::__register();
::HelloWorld_obj::__register();
::cpp::Lib_obj::__boot();
::HelloWorld_obj::__boot();
::Sys_obj::__boot();
::haxe::io::Eof_obj::__boot();
}

