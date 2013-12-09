
FactoryGirl.define do
  factory :outdoor, :class => Refinery::Outdoors::Outdoor do
    sequence(:name) { |n| "refinery#{n}" }
  end
end

