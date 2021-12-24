import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";

const faqs = [
  {
    question: "What services are you offering?",
    answer:
      "We are offering all kinds of gift cards offered by different companies along with digital services like Branding, Promoting, consultancy, marketing campaign",
  },
  {
    question: "Do I need to pay any fees?",
    answer:
      "We do not charge any fees to become a member. We have a subscription based offering for our sellers. That is for promoting and branding sellers products which cost BDT: 500 taka per month",
  },
  {
    question: "What is Gearsbd Guarantee?",
    answer:
      "All purchases made on Gearsbd are protected for free, and our Gearsbd Guarantee ensures that you get the item as described or your money back",
  },
  {
    question: "What is Gerasbd return policy?",
    answer:
      "All sales are final on Gearsbd and there are no refunds unless the item is different from described. If this is the case, you'll be covered by our Gearsbd Buyer Guarantee. Once a transaction has been completed, there are absolutely no returns or refunds. By completing the transaction, you are agreeing to accept the item and finalizing the transaction. To avoid a dispute with a transaction; We encourage Buyers to review the listing photos, description and item condition before purchase",
  },
  {
    question: "Can I cancel my order?",
    answer:
      "Immediately after placing the order.  If you change your mind or make a mistake, you can cancel the order within 1-2 minutes while it is processed",
  },
  {
    question: "I cancelled my transactions, where is my amount?",
    answer:
      "When you cancel your transaction, we will submit the cancellation immediately. Depending on the payment method you use, it could take up to 7 days to process. This is because some issuing banks do not finalize the cancellation process until the payment authorization expires which may be up to 7 days. This time period is referred to as your bank's 'authorization period'. These charges usually appear on your statement as 'Authorizing' or 'Pending'. In most cases, the original charge will be removed from your statement rather than a separate entry appearing that shows funds returning. If you used a credit/debit card, the funds may go back to your card or the original charge may be removed from your statement; If you used Alipay or WeChatPay, the fund will go back to your respective account; If you used Cash from your Gameflip Cash Balance (Sale Proceeds or Add Funds), it will go back to your Cash Balance immediately; If you used Credits from your Gameflip Credits Balance, it will go back to your Credits Balance immediately.",
  },
  {
    question: "How do I manage Gearsbd subscription offering?",
    answer:
      "To manage your Gearsbd subscription, you must log into your Gearsbd account and visit the Subscriptions page. On this page, you will be able to visualize relevant information related to your active subscription plan, such as; Amount of Fees due; The Expiration Date (also the end of the billing cycle); And you can also enable or disable the Auto-Renewal of your subscription plan",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function FAQ() {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
          <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Frequently asked questions
          </h2>
          <dl className="mt-6 space-y-6 divide-y divide-gray-200">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                        <span className="font-medium text-gray-900">
                          {faq.question}
                        </span>
                        <span className="ml-6 h-7 flex items-center">
                          <ChevronDownIcon
                            className={classNames(
                              open ? "-rotate-180" : "rotate-0",
                              "h-6 w-6 transform"
                            )}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base text-gray-500">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
