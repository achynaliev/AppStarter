class Api::ProjectSearchesController < ApplicationController

  def index
    project_categories = []#['tech', 'technology', 'design' , 'gadgets', 'gadget']

    search_query = search_params[:query]

    if search_query.length < 2
      @projects = {}
    else
      @projects = Project.search_project(search_query)
    end

    render 'api/project_searches/index'
  end

  private

  def search_params
    params.require(:search).permit(:query)
  end

end
