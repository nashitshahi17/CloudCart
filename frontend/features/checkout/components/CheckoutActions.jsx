import Button from "../../../shared/components/Button/Button";

export default function CheckoutActions({

    loading,

    onSubmit

}) {

    return (

        <div className="flex justify-end">

            <Button

                onClick={onSubmit}

                disabled={loading}

            >

                {

                    loading

                        ? "Processing..."

                        : "Complete Order"

                }

            </Button>

        </div>

    );

}