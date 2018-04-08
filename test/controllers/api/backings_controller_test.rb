require 'test_helper'

class Api::BackingsControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get api_backings_create_url
    assert_response :success
  end

  test "should get destroy" do
    get api_backings_destroy_url
    assert_response :success
  end

end
