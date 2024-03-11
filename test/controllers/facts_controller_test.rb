require "test_helper"

class FactsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @fact = facts(:one)
  end

  test "should get index" do
    get facts_url, as: :json
    assert_response :success
  end

  test "should create fact" do
    assert_difference("Fact.count") do
      post facts_url, params: { fact: { label: @fact.label, location_id: @fact.location_id, text: @fact.text } }, as: :json
    end

    assert_response :created
  end

  test "should show fact" do
    get fact_url(@fact), as: :json
    assert_response :success
  end

  test "should update fact" do
    patch fact_url(@fact), params: { fact: { label: @fact.label, location_id: @fact.location_id, text: @fact.text } }, as: :json
    assert_response :success
  end

  test "should destroy fact" do
    assert_difference("Fact.count", -1) do
      delete fact_url(@fact), as: :json
    end

    assert_response :no_content
  end
end
