angular-bindqueryparams
=======================

2-way bindings to query-string parameters

Have you ever been coding along and thought:  "I just want to bind to a query string parameter."

Now you can.  Any module can attach a two-way binding to the query string object.  See `example/`.

Note:  Please don't assign objects or arrays to query string parameters.  Strange things happen.
You should only use primitives.  (Ideally, you should only use strings.)  If you need to store an
array or object, please handle the stringification and de-stringification yourself.