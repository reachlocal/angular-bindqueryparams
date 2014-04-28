angular-bindqueryparams
=======================

2-way bindings to query-string parameters

Have you ever been coding along and thought:  "I just want to bind to a query string paramater."

Now you can.  Any module can attach a two-way binding to the query string object.  See the example.

Note:  Please don't assign objects or arrays to query string parameters.  String things happen.
You should only use primitives.  If you need to store an array or object, please handle the
stringification and de-stringification.