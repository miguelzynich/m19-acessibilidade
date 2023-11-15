import React from "react";
import { withValidation } from "./WithValidation";

function AccountValidation ({parsedAccEmpty, parsedEqual}) {
    return (
        <div className="validation">
            {parsedAccEmpty}
            {parsedEqual}
        </div>
    );
}

export default withValidation(AccountValidation)