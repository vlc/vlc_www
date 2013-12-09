module Refinery
  module Zeniths
    class ZenithsController < ::ApplicationController

      before_filter :find_all_zeniths
      before_filter :find_page

      def index
        # you can use meta fields from your model instead (e.g. browser_title)
        # by swapping @page for @zenith in the line below:
        present(@page)
      end

      def show
        @zenith = Zenith.find(params[:id])

        # you can use meta fields from your model instead (e.g. browser_title)
        # by swapping @page for @zenith in the line below:
        present(@page)
      end

    protected

      def find_all_zeniths
        @zeniths = Zenith.order('position ASC')
      end

      def find_page
        @page = ::Refinery::Page.where(:link_url => "/zeniths").first
      end

    end
  end
end
