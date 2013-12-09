
FactoryGirl.define do
  factory :company, :class => Refinery::Companies::Company do
    sequence(:name) { |n| "refinery#{n}" }
  end
end

