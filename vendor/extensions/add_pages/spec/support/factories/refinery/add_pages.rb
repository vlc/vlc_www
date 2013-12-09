
FactoryGirl.define do
  factory :add_page, :class => Refinery::AddPages::AddPage do
    sequence(:name) { |n| "refinery#{n}" }
  end
end

