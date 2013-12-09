module Refinery
  module Zeniths
    module Admin
      class ZenithsController < ::Refinery::AdminController

        crudify :'refinery/zeniths/zenith',
                :title_attribute => 'name', :xhr_paging => true

      end
    end
  end
end
