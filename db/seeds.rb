# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


# Added by Refinery CMS Pages extension
Refinery::Pages::Engine.load_seed

# Added by Refinery CMS Homes extension
Refinery::Homes::Engine.load_seed

# Added by Refinery CMS Admins extension
Refinery::Admins::Engine.load_seed

# Added by Refinery CMS Add Pages extension
Refinery::AddPages::Engine.load_seed

# Added by Refinery CMS Services extension
Refinery::Services::Engine.load_seed

# Added by Refinery CMS Zeniths extension
Refinery::Zeniths::Engine.load_seed

# Added by Refinery CMS Outdoors extension
Refinery::Outdoors::Engine.load_seed

# Added by Refinery CMS Companies extension
Refinery::Companies::Engine.load_seed
