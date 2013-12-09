module Refinery
  module AddPages
    class AddPagesController < ::ApplicationController

      before_filter :find_all_add_pages
      before_filter :find_page

      def index
        # you can use meta fields from your model instead (e.g. browser_title)
        # by swapping @page for @add_page in the line below:
        present(@page)
      end

      def show
        @add_page = AddPage.find(params[:id])

        # you can use meta fields from your model instead (e.g. browser_title)
        # by swapping @page for @add_page in the line below:
        present(@page)
      end

    protected

      def find_all_add_pages
        @add_pages = AddPage.order('position ASC')
      end

      def find_page
        @page = ::Refinery::Page.where(:link_url => "/add_pages").first
      end

    end
  end
end
