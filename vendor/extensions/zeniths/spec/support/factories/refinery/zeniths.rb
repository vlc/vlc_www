
FactoryGirl.define do
  factory :zenith, :class => Refinery::Zeniths::Zenith do
    sequence(:name) { |n| "refinery#{n}" }
  end
end

