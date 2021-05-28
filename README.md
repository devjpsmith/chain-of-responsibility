# chain-of-responsibility

This app demonstrates the Chain of Responsibility pattern by using different validator classes to validate different company types. 
The code initiating the request has no idea of the implementation; it just uses a "validator".
None of the validation classes are aware of each other or know their order in the chain. They just validate if they can.
