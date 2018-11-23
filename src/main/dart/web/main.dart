@JS()
library interop_test;

import 'package:js/js.dart';
import 'dart:html';

@JS('MyLib.Name')
class Name {
  external Name(String firstname,String lastname);
  external String get fullname;
}

@JS('MyLib.sayMyName')
external String sayMyName();

@JS('MyLib.main')
external void mainFromTS();

void main() {
  final name = Name("Mike","Mitterer");
  querySelector('#output').text = 'Your Dart app is running. ${name.fullname}';

  window.console.log("From JS: ${sayMyName()}");

  //mainFromTS();
}
